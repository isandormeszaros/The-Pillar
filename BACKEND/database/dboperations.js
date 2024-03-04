var config = require("./dbconfig");
const mysql = require("mysql");
let pool = mysql.createPool(config);

// GET /brands - Az összes elérhető óramárka lekérdezése
async function selectBrands() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT watchName, price FROM watches.alltablesview",
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
}

// GET /allwatches/asc - Az órák ár szerint növekvő sorrendbe rendezése
async function selectBrandsByPriceASC() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM watches.alltablesview ORDER BY price ASC",
      (error, elements) => {
        if (error) {
          reject(error);
        } else {
          resolve(elements);
        }
      }
    );
  });
}

// GET /allwatches/desc - Az órák ár szerint csökkenőbe sorrendbe rendezése
async function selectBrandsByPriceDESC() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM watches.alltablesview ORDER BY price DESC",
      (error, elements) => {
        if (error) {
          reject(error);
        } else {
          resolve(elements);
        }
      }
    );
  });
}

// GET /allwatches/filter/rolex - Az órák ár szerint növekvő sorrendbe rendezése
async function selectFilteredProduct(szur) {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM watches.alltablesview WHERE watchName LIKE ?",
      [szur],
      (error, elements) => {
        if (error) {
          reject(error);
        } else {
          resolve(elements);
        }
      }
    );
  });
}

//2.    GET     /termekek/page/x       - Az x. oldalon található termékek lista
async function selectPageProduct(page) {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM watches.alltablesview ORDER BY id ASC LIMIT ?, 30",
      [(page - 1) * 30],
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
}

// GET /allwatches/all/brands - Az óra márkák megjelenítése
async function selectJustBrands() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT brand, watch_count FROM watches.allbrandscount;",
      (error, elements) => {
        if (error) {
          reject(error);
        } else {
          resolve(elements);
        }
      }
    );
  });
}

// GET /allwatches/all/brands - Az óra márkák megjelenítése
async function selectByBrands() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT brand, watch_count FROM watches.allbrandscount;",
      (error, elements) => {
        if (error) {
          reject(error);
        } else {
          resolve(elements);
        }
      }
    );
  });
}

// GET /allwatches/all/dialcolor - Az óra számplap színeinek megjelenítése
async function selectByDialColors() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT color, watch_count FROM watches.alldialcolorscount;",
      (error, elements) => {
        if (error) {
          reject(error);
        } else {
          resolve(elements);
        }
      }
    );
  });
}

// GET /allwatches/all/casematerial - Az óra tok anyagának megjelenítése
async function selectByCaseMaterials() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT material, watch_count FROM watches.allcasematerialcount;",
      (error, elements) => {
        if (error) {
          reject(error);
        } else {
          resolve(elements);
        }
      }
    );
  });
}

// GET /allwatches/all/date - Az óra gyártási idejének megjelenítése
async function selectByDates() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT date, watch_count FROM watches.alldatescount;",
      (error, elements) => {
        if (error) {
          reject(error);
        } else {
          resolve(elements);
        }
      }
    );
  });
}

// GET /allwatches/all/strapmaterial - Az óra szíjának anyagának megjelenítése
async function selectByStrapMaterials() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT material, watch_count FROM watches.allstrapmaterialcount;",
      (error, elements) => {
        if (error) {
          reject(error);
        } else {
          resolve(elements);
        }
      }
    );
  });
}

// GET /allwatches/all/movements - Az óra típusának megjelenítése
async function selectByMovements() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT movement, watch_count FROM watches.allmovementscount;",
      (error, elements) => {
        if (error) {
          reject(error);
        } else {
          resolve(elements);
        }
      }
    );
  });
}

// GET /allwatches/all/resistances - Az óra vízállóságának megjelenítése
async function selectByResistances() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT resistance, watch_count FROM watches.allwaterresistancescount;",
      (error, elements) => {
        if (error) {
          reject(error);
        } else {
          resolve(elements);
        }
      }
    );
  });
}

// GET /allwatches/all/bandwidthes - Az óraszíj ?????? megjelenítése
async function selectByBandWidthes() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT width, watch_count FROM watches.allbandwidthscount;",
      (error, elements) => {
        if (error) {
          reject(error);
        } else {
          resolve(elements);
        }
      }
    );
  });
}

// GET /allwatches/all/dialmaterials - A számplap anyagának megjelenítése
async function selectByDialMaterials() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT material, watch_count FROM watches.alldialmaterialcount;",
      (error, elements) => {
        if (error) {
          reject(error);
        } else {
          resolve(elements);
        }
      }
    );
  });
}

async function selectProductWhere(whereConditions) {
  let whereClause = "WHERE "; // Inicializáljuk a whereClause változót
  let values = [];

  if (whereConditions.watchName) {
    whereClause += " watchName LIKE ?";
    values.push("%" + whereConditions.watchName + "%");
  }

  if (whereConditions.dialMaterial) {
    if (values.length > 0) {
      whereClause += " AND";
    }
    whereClause += " dialMaterial LIKE ?";
    values.push("%" + whereConditions.dialMaterial + "%");
  }

  // SQL lekérdezés összeállítása
  const sqlQuery = `SELECT * FROM watches.alltablesview ${whereClause}`;

  console.log(values);
  console.log(whereConditions);
  console.log(sqlQuery);

  return new Promise((resolve, reject) => {
    // Végrehajtjuk a lekérdezést és visszaadjuk az eredményt
    pool.query(sqlQuery, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

//4. post bejelentkezés /login
async function getSignIn(email, password) {
  console.log(email, password);
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM watches.users WHERE userEmail=? and password=SHA2(?,256)",
      [email, password],
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        if (elements == "") {
          return reject({ message: "Nincs ilyen felhasználó!" });
        }
        return resolve(elements);
      }
    );
  });
}

//5.Get profil adatai
async function getUserProfile(email) {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM watches.users WHERE userEmail=?",
      [email],
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        if (elements == "") {
          return reject({ message: "Nincs ilyen felhasználó!" });
        }
        return resolve(elements);
      }
    );
  });
}

//6. post regisztráció /register
async function createUser(name, email, password, phone) {
  return new Promise((resolve, reject) => {
    pool.query(
      "INSERT INTO watches.users (name, userEmail, password, userPhone) VALUES (?, ?, SHA2(?,256), ?)",
      [name, email, password, phone],
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
}

async function placeOrder(data) {
  const { cart, orderDate, shippingDate, status, paymentId, userAddress } = data;

  try {
    const orderId = 123; // Megfelelő módon állítsd be az orderId értékét

    await pool.query("START TRANSACTION");

    // Beszúrás az orderconnbase táblába
    for (const item of cart) {
      await pool.query(
        "INSERT INTO orderconnbase (orderId, productId, quantity, price) VALUES (?, ?, ?, ?)",
        [orderId, item.id, item.quantity, item.price]
      );
    }

    // Beszúrás az orders táblába
    const result = await pool.query(
      "INSERT INTO orders (orderDate, shippingDate, status, paymentId, userAddress) VALUES (?, ?, ?, ?, ?)",
      [orderDate, shippingDate, status, paymentId, userAddress]
    );

    await pool.query("COMMIT");
    console.log("Megrendelés sikeresen rögzítve!");
    return result.insertId; // Visszaadhatjuk az új megrendelés azonosítóját
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Hiba a megrendelés rögzítése közben:", error);
    throw error;
  }
}


//2.	GET		/filmek/3		- Egy film adatai
async function selectFilmekId(id) {
  return new Promise((resolve, reject) => {
    pool.query("select * from film where id=?", [id], (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
}

//3.	POST		/filmek			- Új film létrehozása
async function insertFilmek(rendezo, cim, ev, nyelv, hossz) {
  return new Promise((resolve, reject) => {
    pool.query(
      "insert into film (rendezo,cim,ev,nyelv,hossz) values (?,?,?,?,?)",
      [rendezo, cim, ev, nyelv, hossz],
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
}

//4.	PUT		/filmek/3		- Az adott film módosítása
async function updateFilmek(rendezo, cim, ev, nyelv, hossz, id) {
  return new Promise((resolve, reject) => {
    pool.query(
      "update film set rendezo=?,cim=?,ev=?,nyelv=?,hossz=? where id=?",
      [rendezo, cim, ev, nyelv, hossz, id],
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
}

//5.	PATCH		/filmek/3		- Részleges módosítás
async function patchFilmek(id, rendezo, cim, ev, nyelv, hossz) {
  return new Promise((resolve, reject) => {
    let ell = 0;
    let sql = "update film set";
    let arr = [];
    if (rendezo) {
      ell = 0;
      sql += " rendezo=?";
      arr.push(rendezo);
      ell = 1;
    }
    if (cim) {
      if (ell == 1) sql += ",";
      ell = 0;
      sql += " cim=?";
      arr.push(cim);
      ell = 1;
    }

    if (ev) {
      if (ell == 1) sql += ",";
      ell = 0;
      sql += " ev=?";
      arr.push(ev);
      ell = 1;
    }

    if (nyelv) {
      if (ell == 1) sql += ",";
      ell = 0;
      sql += " nyelv=?";
      arr.push(nyelv);
      ell = 1;
    }

    if (hossz) {
      if (ell == 1) sql += ",";
      ell = 0;
      sql += " hossz=?";
      arr.push(hossz);
    }
    sql += " where id=?";
    arr.push(id);
    pool.query(sql, arr, (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
}

//6.	DELETE		/filmek/3 		- Egy film törlése
async function deleteFilmek(id) {
  return new Promise((resolve, reject) => {
    pool.query("delete from film where id=?", id, (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
}

async function selectUsers(email, password) {
  return new Promise((resolve, reject) => {
    pool.query(
      "select * from user where email=? and password=?",
      [email, password],
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        if (elements == "") {
          return reject("Nincs ilyen user");
        }
        return resolve(elements);
      }
    );
  });
}

// async function selectFilterProducts(szur){
//     return new Promise((resolve,reject)=>{
//         pool.query('select * from random where termek = ? ,[szur](error, elements)=>{
//             if(error){
//                 return(reject(error))
//             }
//             if(elements==""){
//                 return(reject("Nincs ilyen user"))
//             }
//             return(resolve(elements))
//         })
//     })
// }

module.exports = {
  selectBrands: selectBrands,
  selectFilteredProduct: selectFilteredProduct,
  selectProductWhere: selectProductWhere,
  selectJustBrands: selectJustBrands,
  selectBrandsByPriceASC: selectBrandsByPriceASC,
  selectBrandsByPriceDESC: selectBrandsByPriceDESC,
  selectPageProduct: selectPageProduct,
  selectByBrands: selectByBrands,
  selectByDialColors: selectByDialColors,
  selectByDates: selectByDates,
  selectByCaseMaterials: selectByCaseMaterials,
  selectByStrapMaterials: selectByStrapMaterials,
  selectByMovements: selectByMovements,
  selectByResistances: selectByResistances,
  selectByBandWidthes: selectByBandWidthes,
  selectByDialMaterials: selectByDialMaterials,
  getSignIn: getSignIn,
  getUserProfile: getUserProfile,
  createUser: createUser,
  placeOrder: placeOrder,
  selectFilmekId: selectFilmekId,
  insertFilmek: insertFilmek,
  updateFilmek: updateFilmek,
  patchFilmek: patchFilmek,
  deleteFilmek: deleteFilmek,
  selectUsers: selectUsers,
};
