import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Select,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../../Styles/Products.module.css";


export default function SideBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.getAll("category"));
  const initialState = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  const [category, setCategory] = useState(initialState || []);

  const [order, setOrder] = useState(initialOrder || "");

  console.log(order);
  console.log(category);
  const handleFilter = (e) => {
    let newCategory = [...category];

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    const params = {
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [category, order]);
  return (
    <div className={styles.sidebar}>
      <Heading
        as="h2"
        size="sm"
        color={"black"}
        paddingTop="30px"
        className={styles.filterHeading}
      >
        Mobile Phones
      </Heading>
      {/* <h3>Filter By</h3> */}
      <Accordion allowToggle className={styles.Accordion}>
        <AccordionItem>
          <h6>
            <AccordionButton>
              <Box as="span" flex="1" fontSize={"20px"} textAlign="left">
                Category
              </Box>
              <AccordionIcon/>
            </AccordionButton>
          </h6>
          <AccordionPanel pb={4}>
            <div>
              <div className={styles.filtertitle}>
                <input
                  type="checkbox"
                  value="Realme"
                  onChange={handleFilter}
                  checked={category.includes("Realme")}
                />
                <label htmlFor="">Realme</label>
              </div>
              <div className={styles.filtertitle}>
                <input
                  type="checkbox"
                  value="Apple"
                  onChange={handleFilter}
                  checked={category.includes("Apple")}
                />
                <label htmlFor="">Apple Mobile</label>
              </div>
              <div className={styles.filtertitle}>
                <input
                  type="checkbox"
                  value="Vivo"
                  onChange={handleFilter}
                  checked={category.includes("Vivo")}
                />
                <label htmlFor="">Vivo</label>
              </div>
              <div className={styles.filtertitle}>
                <input
                  type="checkbox"
                  value="Redmi"
                  onChange={handleFilter}
                  checked={category.includes("Redmi")}
                />
                <label htmlFor="">Redmi Mobiles</label>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" fontSize={"20px"} textAlign="left">
                Sort By Released
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div onChange={handleSort} style={{ fontSize: '15px', color: '#abc72c' }}>
              <div className={styles.filtertitle}>
              <input
                type="radio"
                name="sort_by"
                value={"asc"}
                defaultChecked={order === "asc"}
              />
              <label htmlFor="">Ascending</label>
              </div>  
             <div className={styles.filtertitle}>
              <input
                type="radio"
                name="sort_by"
                value={"desc"}
                defaultChecked={order === "desc"}
              />
              <label htmlFor="">Descending</label>
             </div> 
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      {/* <h3>Sort By Order</h3> */}
    </div>
  );
}
