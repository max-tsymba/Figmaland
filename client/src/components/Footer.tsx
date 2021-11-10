import React, { FunctionComponent } from "react";
import TableList from "./UI/TableList";
import Social from "./UI/Social";
import Adress from "./UI/Adress";
//@ts-ignore
import { ReactComponent as LocationIcon } from "../assets/icons/map.svg";
//@ts-ignore
import { ReactComponent as PhoneIcon } from "../assets/icons/android.svg";

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-text min-h-570 flex items-center text-white">
      <div className="container">
        <div className="max-w-1050 mx-auto flex w-full">
          <div className="flex w-3/5 justify-between">
            <TableList
              title="Menu"
              links={[
                { name: "Home", url: "/" },
                { name: "Product", url: "#" },
                { name: "Pricing", url: "#" },
                { name: "About", url: "#" },
                { name: "Contact", url: "#" },
              ]}
            />

            <TableList
              title="Tomothy"
              links={[
                { name: "Eleanor Edwards", url: "#" },
                { name: "Ted Robertson", url: "#" },
                { name: "Annette Russell", url: "#" },
                { name: "Jennie Mckinney", url: "#" },
                { name: "Gloria Richards", url: "#" },
              ]}
            />

            <TableList
              title="Jane Black"
              links={[
                { name: "Philip Jones", url: "#" },
                { name: "Product", url: "#" },
                { name: "Colleen Russell", url: "#" },
                { name: "Marvin Hawkins", url: "#" },
                { name: "Bruce Simmmons", url: "#" },
              ]}
            />
          </div>

          <div className="ml-auto">
            <Adress text="7480 Mockingbird Hill undefined">
              <LocationIcon />
            </Adress>
            <Adress text="(239) 555-0108">
              <PhoneIcon />
            </Adress>
            <div className="mt-30">
              <Social urls={["#", "#", "#"]} color="text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
