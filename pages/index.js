import { Fragment } from "react";
import Link from "next/link";

const homePage = () => {
  return (
    <Fragment>
      <h1>This is Home Page</h1>;
      <ul>
        <li>
          <Link href="/news/Products">Our Products</Link>
        </li>
        <li>
          <Link href="/news/Gifts">Gifts</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default homePage;
