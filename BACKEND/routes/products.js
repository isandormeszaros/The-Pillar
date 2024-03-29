const { response } = require("express");
var express = require("express");
var router = express.Router();
var db = require("../database/dboperations");

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
