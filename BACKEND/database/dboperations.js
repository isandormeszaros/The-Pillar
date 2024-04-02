var config = require("./dbconfig");
const mysql = require("mysql");
let pool = mysql.createPool(config);

// GET /allwatches - Az összes elérhető óramárka lekérdezése
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

// GET /allwatches/wathes/1 - Az oldalon található óra id alapján
async function selectProductById(id) {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM watches.alltablesview WHERE id = ?",
      [id],
      (error, elements) => {
        if (error) {
          reject(error);
        }
        resolve(elements);
      }
    );
  });
}

// GET /allwatches/sort/asc - Az órák ár szerint növekvő sorrendbe rendezése
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

// GET /allwatches/sort/desc - Az órák ár szerint csökkenőbe sorrendbe rendezése
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

// GET /allwatches/filter/rolex - Szűrt termék lekérése
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

// GET /allwatches/page/2 - Az oldalon található terméklista. Pl: 2. oldalon
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

// GET /allwatches/all/brands - Óramárka megjelenítése
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

// GET /allwatches/all/dialcolors - Számlap színének megjelenítése
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

// GET /allwatches/all/dates - Gyártási év megjelenítése
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

// GET /allwatches/all/casematerials - Tok anyagának megjelenítése
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

// GET /allwatches/all/strapmaterials - Szíj anyaganak megjelenítése
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

// GET /allwatches/all/movements - Óramű megjelenítése
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

// GET /allwatches/all/resistances - Vízállóság megjelenítése
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

// GET /allwatches/all/bandwidthes - Szíj szélességének megjelenítése
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

// GET /allwatches/all/dialmaterials - Számlap anyagának megjelenítése
async function selectByDialMaterials() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT material, watch_count FROM alldialmaterialcount",
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

// GET /allwatches/all/country - Óra gyártási helyének megjelenítése
async function selectByCountries() {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT country, watch_count FROM allcountrycount",
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

// GET /allwatches/favourite - Kedvenc termékek megjelenítése
async function selectByFavourite(userId) {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM allfavouriteview WHERE  userId = ?",
      [userId],
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

// POST /allwatches/favourite/add- Kedvenc termékek hozzáadása
async function addToFavourite(userId, productId) {
  return new Promise((resolve, reject) => {
    pool.query(
      (random =
        "SELECT * FROM watches.favourite WHERE userIdFK = ? AND productIdFK = ?"),
      [userId, productId],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          if (result.length > 0) {
            reject("A terméket már hozzáadta a kedvencekhez");
          } else {
            pool.query(
              "INSERT INTO watches.favourite (userIdFK, productIdFK) VALUES (?, ?)",
              [userId, productId],
              (error, result) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(result);
                }
              }
            );
          }
        }
      }
    );
  });
}

// DELETE /allwatches/favourite/delete/2 - Kedvenc termékek törlése
async function deleteByFavourite(id, userId) {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM watches.favourite WHERE id = ? and userIdFK = ?",
      [id, userId],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
}

// DELETE /allwatches/favourite/delete/all - Összes kedvenc termék törlése
async function deleteAllFavourites(userId) {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM watches.favourite WHERE userIdFK = ?",
      [userId],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
}

async function selectProductWhere(whereConditions) {
  let whereClause = ""; // Kezdetben üres string
  let values = [];

  if (whereConditions.watchName) {
    let watchNames = whereConditions.watchName.split(", "); // Split the watchName string into an array
    let watchNameClause = watchNames.map(() => "watchName LIKE ?").join(" OR "); // Create a clause for each watchName
    whereClause += `WHERE (${watchNameClause})`; // Add the watchName clause to the SQL query
    for (let name of watchNames) {
      values.push("%" + name + "%"); // Add each watchName value to the values array
    }
  }

  if (whereConditions.dialMaterial) {
    if (whereClause !== "") {
      whereClause += " AND";
    } else {
      whereClause += "WHERE"; // Ha még nem volt feltétel, akkor WHERE-t kell hozzáadni
    }
    whereClause += " dialMaterial LIKE ?";
    values.push("%" + whereConditions.dialMaterial + "%");
  }

  // SQL lekérdezés összeállítása csak akkor, ha van feltétel
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

// --- FELHASZNÁLÓK KEZELÉSE ---
// Bejelentkezés
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

// Profil részletes adatai
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

// Regisztráció
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

// Fiók törlése
async function deleteUser(id) {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM watches.users WHERE id = ?",
      [id],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
}

// Email validáció
async function getEmail(email) {
  return new Promise((resolve, reject) => {
    pool.query("SELECT email FROM validemail", [email], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// Fiók módosítása
async function patchUser(id, userData) {
  return new Promise((resolve, reject) => {
    let hasPreviousField = false;
    let sql = "UPDATE users SET";
    let values = [];

    if (userData && userData.name) {
      if (hasPreviousField) sql += ",";
      sql += " name=?";
      values.push(userData.name);
      hasPreviousField = true;
    }

    if (userData && userData.userEmail) {
      if (hasPreviousField) sql += ",";
      sql += " userEmail=?";
      values.push(userData.userEmail);
      hasPreviousField = true;
    }

    if (userData && userData.password) {
      if (hasPreviousField) sql += ",";
      sql += " password=SHA2(?,256)";
      values.push(userData.password);
      hasPreviousField = true;
    }

    if (userData && userData.userPhone) {
      if (hasPreviousField) sql += ",";
      sql += " userPhone=?";
      values.push(userData.userPhone);
      hasPreviousField = true;
    }

    if (
      userData &&
      userData.userAddress !== undefined &&
      userData.userAddress !== null
    ) {
      if (hasPreviousField) sql += ",";
      sql += " userAddress=?";
      values.push(userData.userAddress);
      hasPreviousField = true;
    }

    if (!hasPreviousField) {
      resolve(0);
      return;
    }

    sql += " WHERE id=?";
    values.push(id);

    pool.query(sql, values, (error, result) => {
      if (error) {
        console.error("Error: ", error);
        reject(error);
      } else {
        console.log("Sikeres módosítás. Rows affected: ", result.affectedRows);
        resolve(result.affectedRows);
      }
    });
  });
}

// Rendelés leadása
async function placeOrder(data) {
  const { cart, orderDate, shippingDate, status, paymentId, userAddress } =
    data;

  try {
    await pool.query("START TRANSACTION");

    // Beszúrás az orders táblába
    const insertOrderResult = await pool.query(
      "INSERT INTO orders (orderDate, shippingDate, status, paymentId, userAddress) VALUES (?, ?, ?, ?, ?)",
      [orderDate, shippingDate, status, paymentId, userAddress]
    );

    const orderId = insertOrderResult.insertId; // Az új rendelés azonosítója

    const insertOrderQuery =
      "INSERT INTO orderconnbase (orderId, productId, quantity, price) VALUES (?, ?, ?, ?)";

    const productValues = cart.map((item) => [
      item.productId,
      orderId,
      item.quantity,
      item.price,
    ]);

    await pool.query(insertOrderQuery, [productValues]);

    // // Beszúrás az orderconnbase táblába
    // for (const item of cart) {
    //   await pool.query(
    //     "INSERT INTO orderconnbase (productId,, orderId, quantity, price) VALUES (?, ?, ?, ?)",
    //     [item.productId, orderId, item.quantity, item.price]
    //   );
    // }
    // console.log("Succes Y");

    await pool.query("COMMIT");
    console.log("Megrendelés sikeresen rögzítve!");
    return orderId; // Visszaadjuk az új rendelés azonosítóját
  } catch (error) {
    await pool.query("ROLLBACK");
    console.error("Hiba a megrendelés rögzítése közben:", error);
    throw error;
  }
}

async function selectUser(email, password) {
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

module.exports = {
  selectBrands: selectBrands,
  selectProductById: selectProductById,
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
  selectByCountries: selectByCountries,
  selectByFavourite: selectByFavourite,
  addToFavourite: addToFavourite,
  deleteByFavourite: deleteByFavourite,
  deleteAllFavourites: deleteAllFavourites,
  getSignIn: getSignIn,
  getUserProfile: getUserProfile,
  createUser: createUser,
  deleteUser: deleteUser,
  getEmail: getEmail,
  patchUser: patchUser,
  selectUser: selectUser,
  placeOrder: placeOrder,
};
