const { response } = require("express");
var express = require("express");
var router = express.Router();
var db = require("../database/dboperations");

//1.	GET		/allwatches - Az összes elérhető óramárka lekérdezése
router.get("/", (req, res) => {
  db.selectBrands()
    .then((adat) => res.json(adat))
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

// GET /allwatches/filter/rolex Szűrt termék lekérése pl: sapka
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

// Termékek JSON szűrése
router.post("/filter", (req, res) => {
  let JS = req.body;
  // console.log(JS);
  db.selectProductWhere(JS)
    .then((adat) => res.json(adat))
    .catch((error) => res.send(error));
});

// GET /allwatches/filter/rolex infinite scroll
router.get("/page/:page", (req, res) => {
  db.selectPageProduct(req.params.page)
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

router.get("/all/brands", (req, res) => {
  db.selectByBrands()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

router.get("/all/dialcolors", (req, res) => {
  db.selectByDialColors()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

router.get("/all/dates", (req, res) => {
  db.selectByDates()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

router.get("/all/casematerials", (req, res) => {
  db.selectByCaseMaterials()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

router.get("/all/strapmaterials", (req, res) => {
  db.selectByStrapMaterials()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

router.get("/all/movements", (req, res) => {
  db.selectByMovements()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

router.get("/all/resistances", (req, res) => {
  db.selectByResistances()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

router.get("/all/bandwidthes", (req, res) => {
  db.selectByBandWidthes()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

router.get("/all/dialmaterials", (req, res) => {
  db.selectByDialMaterials()
    .then((adat) => res.json(adat))
    .catch((error) => console.log(error));
});

router.post("/orders", (req, res) => {
  const orders = req.body;
  
  db.placeOrder(orders)
    .then((result) => {
      console.log(orders);

      res.json({
        success: true,
        message: "Megrendelés sikeresen rögzítve",
        orderId: result,
      }); // Visszaküldünk egy sikeres választ a kliensnek, és átadjuk az orderId-t
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
        .json({ success: false, error: "Hiba a megrendelés rögzítése közben" }); // Visszaküldünk egy hibaüzenetet a kliensnek, ha valami hiba történik
    });
});

//2.	GET		/filmek/3		- Egy film adatai
router.get("/:id", (req, res) => {
  let id = req.params.id;
  db.selectFilmekId(id)
    .then((adat) => {
      if (adat.length == 0) res.status(404).send("Nincs ilyen rekord: " + id);
      else return res.json(adat);
    })
    .catch((error) => {
      res.send(error);
    });
});

//3.	POST		/filmek			- Új film létrehozása
router.post("/", (req, res) => {
  if (Object.keys(req.body).length < 5)
    res.status(400).send("Az adatok nincsenek megadva! (megnevezes, ar, db)");
  let rendezo = req.body.rendezo;
  let cim = req.body.cim;
  let ev = req.body.ev;
  let nyelv = req.body.nyelv;
  let hossz = req.body.hossz;
  db.insertFilmek(rendezo, cim, ev, nyelv, hossz)
    .then((adat) => {
      res.status(200).json(adat);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

//4.	PUT		/filmek/3		- Az adott film módosítása
router.put("/:id", (req, res) => {
  let id = req.params.id;
  let rendezo = req.body.rendezo;
  let cim = req.body.cim;
  let ev = req.body.ev;
  let nyelv = req.body.nyelv;
  let hossz = req.body.hossz;
  db.updateFilmek(rendezo, cim, ev, nyelv, hossz, id)
    .then((adat) => {
      if (adat.affectedRows == 0)
        res.status(404).send("Nincs ilyen rekord: " + id);
      else return res.json(adat);
    })
    .catch((error) => {
      res.send(error);
    });
});

//5.	PATCH		/filmek/3		- Részleges módosítás
router.patch("/:id", (req, res) => {
  let id = req.params.id;
  let rendezo = req.body.rendezo;
  let cim = req.body.cim;
  let ev = req.body.ev;
  let nyelv = req.body.nyelv;
  let hossz = req.body.hossz;
  db.patchFilmek(id, rendezo, cim, ev, nyelv, hossz)
    .then((adat) => {
      if (adat.affectedRows == 0)
        res.status(404).send("Nincs ilyen rekord: " + id);
      else return res.json(adat);
    })
    .catch((error) => {
      res.send(error);
    });
});

//6.	DELETE		/filmek/3 		- Egy film törlése
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  db.deleteFilmek(id)
    .then((adat) => {
      if (adat.affectedRows == 0)
        res.status(404).send("Nincs ilyen rekord: " + id);
      else return res.json(adat);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
