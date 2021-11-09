import React, { FunctionComponent } from "react";
import TableList from "./UI/TableList";
import Social from "./UI/Social";
import Adress from "./UI/Adress";

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-text min-h-570 flex items-center text-white">
      <div className="container">
        <div className="max-w-1000 mx-auto">
          <div className="flex w-2/3 justify-between">
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
          <div>
            <div>
              <Adress></Adress>
            </div>
            <div>
              <Social urls={["#", "#", "#"]} color="text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
