import React, { useState, useEffect } from "react";
import WatchesServices from "../../services/WatchesServices";
import "bootstrap/dist/css/bootstrap.min.css";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import "./FilterSection.css"

function FilterSection() {
  const location = useLocation();
  const navigate = useNavigate();
 
  const [queryBrands, setQueryBrands] = useState('');
  const [queryDialColors, setQueryDialColors] = useState('');
  const [queryDates, setQueryDates] = useState('');
  
  const [brands, setBrands] = useState([]);
  const [dialColors, setdialColors] = useState([]);
  const [dates, setDates] = useState([]);
  const [caseMaterials, setCaseMaterials] = useState([]);
  const [strapMaterials, setStrapMaterials] = useState([]);
  const [movements, setMovements] = useState([]);
  const [resistances, setResistances] = useState([]);
  const [bandWidthes, setBandWidthes] = useState([]);
  const [dialMaterials, setDialMaterials] = useState([]);
  const [countries, setCountries] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [prices, setPrices] = useState([]);


  // const [state, setState] = useState({
  //   brands: [],
  //   dialColors: [],
  //   dates: [],
  //   caseMaterials: [],
  //   strapMaterials: [],
  //   movements: [],
  //   resistances: [],
  //   bandWidthes: [],
  //   dialMaterials: [],
  //   countries: []
  // });

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedDialColors, setSelectedDialColors] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedCaseMaterials, setSelectedCaseMaterials] = useState([]);
  const [selectedStrapMaterials, setSelectedStrapMaterials] = useState([]);
  const [selectedMovements, setSelectedMovements] = useState([]);
  const [selectedResistances, setSelectedResistances] = useState([]);
  const [selectedBandWidthes, setSelectedBandWidthes] = useState([]);
  const [selectedDialMaterials, setSelectedDialMaterials] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllDialColors, setShowAllDialColors] = useState(false);
  const [showAllDates, setShowAllDates] = useState(false);
  const [showAllCaseMaterials, setShowAllCaseMaterials] = useState(false);
  const [showAllStrapMaterials, setShowAllStrapMaterials] = useState(false);
  const [showAllMovements, setShowAllMovements] = useState(false);
  const [showAllResistances, setShowAllResistances] = useState(false);
  const [showAllBandWidthes, setShowAllBandWidthes] = useState(false);
  const [showAllDialMaterials, setShowAllDialMaterials] = useState(false);
  const [showAllCountries, setShowAllCountries] = useState(false);

  const [activeAccordion, setActiveAccordion] = useState(null);



  // ACCORDION CURRENT INDEXES
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // CUSTOM HOOK FOR GETBRANDS
  useEffect(() => {
    WatchesServices.getBrands()
      .then((response) => setBrands(response.data))
      .catch((error) =>
        console.error("Hiba történt a márkák lekérdezésekor:", error)
      );
  }, []);

  // CUSTOM HOOK FOR GETDIALCOLORS
  useEffect(() => {
    WatchesServices.getDialColors()
      .then((response) => setdialColors(response.data))
      .catch((error) =>
        console.error("Hiba történt a számlalp színe lekérdezésekor:", error)
      );
  }, []);

  // CUSTOM HOOK FOR GETDATES
  useEffect(() => {
    WatchesServices.getDates()
      .then((response) => setDates(response.data))
      .catch((error) =>
        console.error("Hiba történt a dátumok lekérdezésekor:", error)
      );
  }, []);

  // CUSTOM HOOK FOR GETCASEMATERIALS
  useEffect(() => {
    WatchesServices.getCaseMaterials()
      .then((response) => setCaseMaterials(response.data))
      .catch((error) =>
        console.error("Hiba történt a tok anyagok lekérdezésekor:", error)
      );
  }, []);

  // CUSTOM HOOK FOR GETSTRAPMATERIALS
  useEffect(() => {
    WatchesServices.getStrapMaterials()
      .then((response) => setStrapMaterials(response.data))
      .catch((error) =>
        console.error("Hiba történt a szíj anyagok lekérdezésekor:", error)
      );
  }, []);

  // CUSTOM HOOK FOR GETMOVEMENTS
  useEffect(() => {
    WatchesServices.getMovements()
      .then((response) => setMovements(response.data))
      .catch((error) =>
        console.error("Hiba történt a mozgások lekérdezésekor:", error)
      );
  }, []);

  // CUSTOM HOOK FOR GETRESISTANCES
  useEffect(() => {
    WatchesServices.getResistances()
      .then((response) => setResistances(response.data))
      .catch((error) =>
        console.error("Hiba történt a vízállóságok lekérdezésekor:", error)
      );
  }, []);

  // CUSTOM HOOK FOR GETBANDWIDTHES
  useEffect(() => {
    WatchesServices.getBandWidthes()
      .then((response) => setBandWidthes(response.data))
      .catch((error) =>
        console.error("Hiba történt a szíj szélességek lekérdezésekor:", error)
      );
  }, []);

  //   // CUSTOM HOOK FOR GETDIALMATERIALS
  useEffect(() => {
    WatchesServices.getDialMaterials()
      .then((response) => setDialMaterials(response.data))
      .catch((error) =>
        console.error("Hiba történt a számlap anyagok lekérdezésekor:", error)
      );
  }, []);

  //   // CUSTOM HOOK FOR GETCOUNTRIES
  useEffect(() => {
    WatchesServices.getCountries()
      .then((response) => setCountries(response.data))
      .catch((error) =>
        console.error("Hiba történt a gyártási hely lekérdezésekor:", error)
      );
  }, []);


  //   // BRAND ACTUAL CHECKBOX IS SELECTED
  // Handle brand checkbox change event
  const handleBrandChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedBrands([...selectedBrands, value]);
    } else {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== value));
    }
  }

  // DIAL COLOR ACTUAL CHECKBOX IS SELECTED
  const handleDialColorChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedDialColors((prevSelectedDialColors) => [...prevSelectedDialColors, value]);
    } else {
      setSelectedDialColors((prevSelectedDialColors) => prevSelectedDialColors.filter((color) => color !== value));
    }
  };

  //   // DIAL COLOR ACTUAL CHECKBOX IS SELECTED
  const handleDatesChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
        setSelectedDates((prevSelectedDates) => [...prevSelectedDates, value]);
    } else {
        setSelectedDates((prevSelectedDates) => prevSelectedDates.filter((date) => date !== value));
    }
};

  //   // CASE MATERIAL ACTUAL CHECKBOX IS SELECTED
  const handleCaseMaterialChange = (event) => {
    const { checked, value } = event.target;
    setSelectedCaseMaterials(
      checked
        ? [...selectedCaseMaterials, value]
        : selectedCaseMaterials.filter((material) => material !== value)
    );
  };

  //   // STRAP MATERIAL ACTUAL CHECKBOX IS SELECTED
  const handleStrapMaterialChange = (event) => {
    const { checked, value } = event.target;
    setSelectedStrapMaterials(
      checked
        ? [...selectedStrapMaterials, value]
        : selectedStrapMaterials.filter((material) => material !== value)
    );
  };

  //   // MOVEMENT ACTUAL CHECKBOX IS SELECTED
  const handleMovementChange = (event) => {
    const { checked, value } = event.target;
    setSelectedMovements(
      checked
        ? [...selectedMovements, value]
        : selectedMovements.filter((movement) => movement !== value)
    );
  };

  //   // RESISTANCE ACTUAL CHECKBOX IS SELECTED
  const handleResistanceChange = (event) => {
    const { checked, value } = event.target;
    setSelectedResistances(
      checked
        ? [...selectedResistances, value]
        : selectedResistances.filter((resistance) => resistance !== value)
    );
  };

  //   // BAND WIDTH ACTUAL CHECKBOX IS SELECTED
  const handleBandWidthChange = (event) => {
    const { checked, value } = event.target;
    setSelectedBandWidthes(
      checked
        ? [...selectedBandWidthes, value]
        : selectedBandWidthes.filter((width) => width !== value)
    );
  };

  //   // DIAL MATERIAL ACTUAL CHECKBOX IS SELECTED
  const handleDialMaterialChange = (event) => {
    const { checked, value } = event.target;
    setSelectedDialMaterials(
      checked
        ? [...selectedDialMaterials, value]
        : selectedDialMaterials.filter((material) => material !== value)
    );
  };

  //   // COUNTRY ACTUAL CHECKBOX IS SELECTED
  const handleCountryChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedCountries([...selectedCountries, value]);
    } else {
      setSelectedCountries(selectedCountries.filter((country) => country !== value));
    }
  };

  //   // SHOW ALL BRANDS
  const toggleShowAllBrands = () => {
    setShowAllBrands(!showAllBrands);
  };

  //   // SHOW ALL DIAL COLORS
  const toggleShowAllDialColors = () => {
    setShowAllDialColors(!showAllDialColors);
  };

  //   // SHOW ALL DATES
  const toggleShowAllDates = () => {
    setShowAllDates(!showAllDates);
  };

  //   // SHOW ALL CASE MATERIALS
  const toggleShowAllCaseMaterials = () => {
    setShowAllCaseMaterials(!showAllCaseMaterials);
  };

  //   // SHOW ALL STRAP MATERIALS
  const toggleShowAllStrapMaterials = () => {
    setShowAllStrapMaterials(!showAllStrapMaterials);
  };

  //   // SHOW ALL MOVEMENTS
  const toggleShowAllMovements = () => {
    setShowAllMovements(!showAllMovements);
  };

  //   // SHOW ALL RESISTANCES
  const toggleShowAllResistances = () => {
    setShowAllResistances(!showAllResistances);
  };

  //   // SHOW ALL BAND WIDTHES
  const toggleShowAllBandWidthes = () => {
    setShowAllBandWidthes(!showAllBandWidthes);
  };

  // SHOW ALL DIAL MATERIALS
  const toggleShowAllDialMaterials = () => {
    setShowAllDialMaterials(!showAllDialMaterials);
  };

  // SHOW ALL COUNTRIES
  const toggleShowAllCountries = () => {
    setShowAllCountries(!showAllCountries);
  };

  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    setQueryBrands(queryParams.queryBrands || '');

  }, [location.search]);

  const handleSearch = () => {
    let fil = {};
    const queryParams = queryString.parse(location.search);
    if (selectedBrands.length > 0) {
      fil['watchName'] = selectedBrands.join(", ");
      setQueryBrands(queryParams.brand || '');
    }
    if (selectedDialColors.length > 0) {
      fil['dialColor'] = selectedDialColors.join(", ");
      setQueryDialColors(queryParams.dialColor || '');
    }
    if (minPrice && maxPrice) {
    fil['minPrice'] = minPrice;
    fil['maxPrice'] = maxPrice;
    if (selectedDates.length > 0) {
      fil['date'] = selectedDates.join(", ");
      setQueryDates(queryParams.date || '');
    }
  }
    const searchQuery = queryString.stringify(fil);
    navigate(`/allbrands?${searchQuery}`);
    setQueryBrands(fil['watchName']);
    setQueryDialColors(fil['dialColor']);


    // function createSearchParams(params) {
    //   return new URLSearchParams(Object.entries(params).flatMap(([key, values]) => Array.isArray(values) ? values.map((value) => [key, value]) : [[key, values]]));
    // }

    console.log(fil)

    // console.log(createSearchParams({
    //   // foo: ["bar", "baz"],
    //   ['watchName']: selectedBrands
    // }).toString());
  };

  // ACCORDION ITEMS JSON
  const accordionItems = [
    {
      title: "Ár",
      content: (
        <>
          <label className="custom-p-font pt-2">Minimum ár</label>
          <input className="form-control rounded-0" type="number" placeholder="Min" style={{ fontSize: ".85rem" }} onChange={(e) => setMinPrice(parseInt(e.target.value))} />
          <label className="pt-2">Maximum ár</label>
          <input className="form-control rounded-0" type="number" placeholder="Max" style={{ fontSize: ".85rem" }} onChange={(e) => setMaxPrice(parseInt(e.target.value))} />
        </>
      ),
    },
    {
      title: "Márka",
      content: (
        <>
          {brands.slice(0, showAllBrands ? brands.length : 3).map((brand, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="mx-1"
                id={brand.id}
                value={brand.brand}
                checked={selectedBrands.includes(brand.brand)}
                onChange={handleBrandChange}
              />
              <label htmlFor={brand.id}>
                {brand.brand} ({brand.watch_count})
              </label>
            </div>
          ))}
          {!showAllBrands && (
            <a onClick={toggleShowAllBrands} className="filter-btn">
              <i className="pi pi-plus"></i> Összes megtekintése
            </a>
          )}
        </>
      ),
    },
    {
      title: "Számlap színe",
      content: (
        <>
          {dialColors.slice(0, showAllDialColors ? dialColors.length : 3).map((dialColor, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="mx-1"
                id={dialColor.id}
                value={dialColor.color}
                checked={selectedDialColors.includes(dialColor.color)}
                onChange={handleDialColorChange}
              />
              <label htmlFor={dialColor.id}>
                {dialColor.color} ({dialColor.watch_count})
              </label>
            </div>
          ))}
          {!showAllDialColors && (
            <a onClick={toggleShowAllDialColors} className="filter-btn">
              <i className="pi pi-plus"></i> Összes megtekintése
            </a>
          )}
        </>
      ),
    },
    {
      title: "Gyártás éve",
      content: (
        <>
          {dates.slice(0, showAllDates ? dates.length : 3).map((date, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="mx-1"
                id={date.id}
                value={date.date}
                checked={selectedDates.includes(date.date)}
                onChange={handleDatesChange}
              />
              <label htmlFor={date.id}>
                {date.date} ({date.watch_count})
              </label>
            </div>
          ))}
          {!showAllDates && (
            <a onClick={toggleShowAllDates} className="filter-btn">
              <i className="pi pi-plus"></i> Összes megtekintése
            </a>
          )}
        </>
      ),
    },
    {
      title: "Gyártás helye",
      content: (
        <>
          {countries.slice(0, showAllCountries ? countries.length : 3).map((countries, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="mx-1"
                id={countries.id}
                value={countries.country}
                checked={selectedCountries.includes(countries.country)}
                onChange={handleCountryChange}
              />
              <label htmlFor={countries.id} className="d-inline">
                {countries.country} ({countries.watch_count})
              </label>
            </div>
          ))}
          {!showAllCountries && (
            <a onClick={toggleShowAllCountries} className="filter-btn">
              <i className="pi pi-plus"></i> Összes megtekintése
            </a>
          )}
        </>
      ),
    },
    {
      title: "Tok anyag",
      content: (
        <>
          {caseMaterials.slice(0, showAllCaseMaterials ? caseMaterials.length : 3).map((material, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="mx-1"
                id={material.id}
                value={material.X}
                checked={selectedCaseMaterials.includes(material.material)}
                onChange={handleCaseMaterialChange}
              />
              <label htmlFor={material.id}>
                {material.material} ({material.watch_count})
              </label>
            </div>
          ))}
          {!showAllCaseMaterials && (
            <a onClick={toggleShowAllCaseMaterials} className="filter-btn">
              <i className="pi pi-plus"></i> Összes megtekintése
            </a>
          )}
        </>
      ),
    },
    {
      title: "Szíj anyag",
      content: (
        <>
          {strapMaterials.slice(0, showAllStrapMaterials ? strapMaterials.length : 3).map((material, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="mx-1"
                id={material.id}
                value={material.X}
                checked={selectedStrapMaterials.includes(material.material)}
                onChange={handleStrapMaterialChange}
              />
              <label htmlFor={material.id}>
                {material.material} ({material.watch_count})
              </label>
            </div>
          ))}
          {!showAllStrapMaterials && (
            <a onClick={toggleShowAllStrapMaterials} className="filter-btn">
              <i className="pi pi-plus"></i> Összes megtekintése
            </a>
          )}
        </>
      ),
    },
    {
      title: "Mozgás",
      content: (
        <>
          {movements.slice(0, showAllMovements ? movements.length : 3).map((movement, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="mx-1"
                id={movement.id}
                value={movement.X}
                checked={selectedMovements.includes(movement.movement)}
                onChange={handleMovementChange}
              />
              <label htmlFor={movement.id}>
                {movement.movement} ({movement.watch_count})
              </label>
            </div>
          ))}
          {!showAllMovements && (
            <a onClick={toggleShowAllMovements} className="filter-btn">
              <i className="pi pi-plus"></i> Összes megtekintése
            </a>
          )}
        </>
      ),
    },
    {
      title: "Vízállóság",
      content: (
        <>
          {resistances.slice(0, showAllResistances ? resistances.length : 3).map((resistance, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="mx-1"
                id={resistance.id}
                value={resistance.X}
                checked={selectedResistances.includes(resistance.resistance)}
                onChange={handleResistanceChange}
              />
              <label htmlFor={resistance.id}>
                {resistance.resistance + " méter"}  ({resistance.watch_count})
              </label>
            </div>
          ))}
          {!showAllResistances && (
            <a onClick={toggleShowAllResistances} className="filter-btn">
              <i className="pi pi-plus"></i> Összes megtekintése
            </a>
          )}
        </>
      ),
    },
    {
      title: "Szíj szélesség",
      content: (
        <>
          {bandWidthes.slice(0, showAllBandWidthes ? bandWidthes.length : 3).map((width, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="mx-1"
                id={width.id}
                value={width.X}
                checked={selectedBandWidthes.includes(width.band_width)}
                onChange={handleBandWidthChange}
              />
              <label htmlFor={width.id}>
                {width.width + " mm"} ({width.watch_count})
              </label>
            </div>
          ))}
          {!showAllBandWidthes && (
            <a onClick={toggleShowAllBandWidthes} className="filter-btn">
              <i className="pi pi-plus"></i> Összes megtekintése
            </a>
          )}
        </>
      ),
    },
    {
      title: "Számlap anyag",
      content: (
        <>
          {dialMaterials.slice(0, showAllDialMaterials ? dialMaterials.length : 3).map((material, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="mx-1"
                id={material.id}
                value={material.X}
                checked={selectedDialMaterials.includes(material.material)}
                onChange={handleDialMaterialChange}
              />
              <label htmlFor={material.id}>
                {material.material} ({material.watch_count})
              </label>
            </div>
          ))}
          {!showAllDialMaterials && (
            <a onClick={toggleShowAllDialMaterials} className="filter-btn">
              <i className="pi pi-plus"></i> Összes megtekintése
            </a>
          )}
        </>
      ),
    }
  ];

  //   return (
  //     <section id="filter-section">
  //       {accordionItems.map((item, index) => (
  //         <div key={index} className="py-1 custom-p-font text-break">
  //           <div className="accordion-title filter-title" onClick={() => toggleAccordion(index)}>
  //             {item.title}
  //           </div>
  //           {activeAccordion === index && (
  //             <div className="accordion-content">
  //               {item.content}
  //             </div>
  //           )}
  //         </div>
  //       ))}
  //       <button className="handle-search custom-p-font" onClick={handleSearch}>Szűrés<i className="pi pi-filter pi-product"></i></button>
  //       <button className="handle-search custom-p-font custom-product-delete" onClick={handleSearch}>Törlés<i className="pi pi-filter-slash pi-product"></i></button>
  //     </section>
  //   );
  // }

  console.log(selectedDates);

  return (
    <section id="filter-section">
      {accordionItems.map((item, index) => (
        <div key={index} className="py-1 custom-p-font text-break">
          <div className="accordion-title filter-title d-flex align-items-center" onClick={() => toggleAccordion(index)}>
            <span>{item.title}</span>
            <i
              className={`pi pi-${activeAccordion === index ? 'minus' : 'plus'}`}
              style={{ marginLeft: 'auto' }}
            ></i>
          </div>
          {activeAccordion === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
      <button className="handle-search custom-p-font" onClick={handleSearch}>Szűrés<i className="pi pi-filter pi-product"></i></button>
      <button className="handle-search custom-p-font custom-product-delete" onClick={handleSearch}>Törlés<i className="pi pi-filter-slash pi-product"></i></button>
    </section>
  );
}

export default FilterSection;

