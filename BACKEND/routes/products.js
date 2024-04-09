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

// GET /allwatches/brands - Óramárka megjelenítése leírással
router.get("/brands", (req, res) => {
  db.selectJustBrands()
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

// POST /allwatches/favourite/add/2 - Kedvenc termékek hozzáadása
router.post("/favourite/add", (req, res) => {
  const { userId, productId } = req.body;
  
  db.addToFavourite(userId, productId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      if (error === "A terméket már hozzáadta a kedvencekhez") {
        res.status(400).send("A termék már a kedvencek között van");
      } else {
        res.status(500).send(error.message);
      }
    });
});

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

module.exports = router;
