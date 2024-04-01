const { response } = require("express");
var express = require("express");
var router = express.Router();
var db = require("../database/dboperations");
const { ToastBody } = require("react-bootstrap");

// GET /allwatches - Az összes elérhető óramárka lekérdezése
router.get("/", (req, res) => {
  db.selectBrands()
    .then((adat) => res.json(adat))
    .catch((error) => res.send(error));
});

router.get("/watches/:id", (req, res) => {
  let id = req.params.id;

  db.selectProductById(id)
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

// GET /allwatches/sort/asc - Az órák ár szerint növekvő sorrendbe rendezése
router.get("/sort/asc", (req, res) => {
  db.selectBrandsByPriceASC()
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

// GET /allwatches/sort/desc - Az órák ár szerint csökkenőbe sorrendbe rendezése
router.get("/sort/desc", (req, res) => {
  db.selectBrandsByPriceDESC()
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

// GET /allwatches/filter/rolex - Szűrt termék lekérése
router.get("/filter/:szur", (req, res) => {
  let szur = "%" + req.params.szur + "%";
  db.selectFilteredProduct(szur)
    .then((adat) => {
      if (adat.length === 0) {
        res.status(404).send("Nincs ilyen adat");
      } else {
        res.json(adat);
      }
    })
    .catch((error) => {
      res.status(500).send("Hiba történt a szűrés során: " + error);
    });
});

// POST allwatches/filter - Termékek JSON szűrése
router.post("/filter", (req, res) => {
  let JS = req.body;
  // console.log(JS);
  db.selectProductWhere(JS)
    .then((adat) => res.json(adat))
    .catch((error) => res.send(error));
});

// GET /allwatches/page/2 - infinite scroll
router.get("/page/:page", (req, res) => {
  db.selectPageProduct(req.params.page)
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

// GET /allwatches/all/brands - Óramárka megjelenítése
router.get("/all/brands", (req, res) => {
  db.selectByBrands()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

// GET /allwatches/all/dialcolors - Számlap színének megjelenítése
router.get("/all/dialcolors", (req, res) => {
  db.selectByDialColors()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

// GET /allwatches/all/dates - Gyártási év megjelenítése
router.get("/all/dates", (req, res) => {
  db.selectByDates()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

// GET /allwatches/all/casematerials - Tok anyagának megjelenítése
router.get("/all/casematerials", (req, res) => {
  db.selectByCaseMaterials()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

// GET /allwatches/all/strapmaterials - Szíj anyaganak megjelenítése
router.get("/all/strapmaterials", (req, res) => {
  db.selectByStrapMaterials()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

// GET /allwatches/all/movements - Óramű megjelenítése
router.get("/all/movements", (req, res) => {
  db.selectByMovements()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

// GET /allwatches/all/resistances - Vízállóság megjelenítése
router.get("/all/resistances", (req, res) => {
  db.selectByResistances()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

// GET /allwatches/all/bandwidthes - Szíj szélességének megjelenítése
router.get("/all/bandwidthes", (req, res) => {
  db.selectByBandWidthes()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

// GET /allwatches/all/dialmaterials - Számlap anyagának megjelenítése
router.get("/all/dialmaterials", (req, res) => {
  db.selectByDialMaterials()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

// GET /allwatches/all/country - Óra gyártási helyének megjelenítése
router.get("/all/countries", (req, res) => {
  db.selectByCountries()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

// TODO: • GET: Retrieve favorite items - /favourite/get
// TODO: • POST: Add item to favorites - /favourite/post
// TODO: • DELETE: Remove item from favorites - /favourite/delete

// GET /allwatches/favourite/2 - Kedvenc termékek megjelenítése
router.get("/favourite/:id", (req, res) => {
  const userId = req.params.id;

  db.selectByFavourite(userId)
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

router.post("/favourite/check", (req, res) => {
  const { userIdFK, productIdFK } = req.body;
  console.log("userIdFK:", userIdFK);
  console.log("productIdFK:", productIdFK);

  db.checkProductInFavourites(userIdFK, productIdFK)
    .then((adat) => res.json(adat))
    .catch((error) => res.send(error));
});

//  POST /allwatches/favourite/add/2 - Kedvenc termékek hozzáadása
// router.post("/favourite/add", async (req, res) => {
//   const { userIdFK, productIdFK } = req.body;

//   try {
//     const isProductInFavourites = await checkProductInFavourites(userIdFK, productIdFK);

//     if (isProductInFavourites) {
//       res.status(400).json({ message: "A termék már szerepel a kedvencek között." });
//     } else {
//       await addToFavourite(userIdFK, productIdFK);
//       res.json({ message: "A termék hozzáadva a kedvencek közé." });
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// DELETE /allwatches/favourite/delete - Kedvenc termékek törlése
router.delete("/favourite/delete/:id", (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  db.deleteByFavourite(id, userId)
    .then((data) => {
      if (data.affectedRows == 0) res.status(404).send("Nincs ilyen rekord!");
      else
        return res.json({
          success: true,
          message: "Termék sikeresen törölve a kedvencek közül",
        });
    })
    .catch((error) => {
      res.send(error);
    });
});

// DELETE /allwatches/favourite/alldelete- Összes kedvenc termék törlése
router.delete("/favourite/all/delete", (req, res) => {
  const userId = req.body.userId;

  db.deleteAllFavourites(userId )
    .then((data) => {
      if (data.affectedRows == 0) res.status(404).send("Nincs ilyen rekord!");
      else
        return res.json({
          success: true,
          message: "Összes termék sikeresen törölve a kedvencek közül",
        });
    })
    .catch((error) => {
      res.send(error);
    });
});

// GET /allwatches/orders - Rendelés leadása
router.post("/orders", (req, res) => {
  const orders = req.body;

  db.placeOrder(orders)
    .then((result) => {
      console.log(orders);

      res.json({
        success: true,
        message: "Megrendelés sikeresen rögzítve",
        orderId: result,
      });
    })
    .catch((error) => {
      console.log(orders);
      for (const item of orders.cart) {
        console.log("Item OrderId:", item.orderId);
        console.log("Item ID:", item.id);
        console.log("Item Quantity:", item.quantity);
        console.log("Item Price:", item.price);
        console.log("---------------------");
      }
      //  orderDate, shippingDate, status, paymentId, userData.address
      console.log("orderDate:", orders.orderDate);
      console.log("shippingDate:", orders.shippingDate);
      console.log("status:", orders.status);
      console.log("payment:", orders.paymentId);
      console.log("address:", orders.userAddress);

      console.error("Hiba a megrendelés rögzítése közben:", error);
      res
        .status(500)
        .json({ success: false, error: "Hiba a megrendelés rögzítése közben" });
    });
});

module.exports = router;
