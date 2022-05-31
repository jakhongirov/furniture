import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";

import Layout from "../src/components/layout/layout";
// import Order from "../src/components/order/order";
import Company from "../src/components/company/company";
import Catalog from "../src/components/catalog/catalog";
import Advantages from "../src/components/advantages/advantages";
import Modal from "../src/components/modal/modal";
import Contacts from "../src/components/contacts/contacts";

export default function Home() {
  const elModal = useRef("none");

  return (
    <>
      <Layout elModal={elModal}>
        <Company />
        <Catalog />
        <Advantages />
        <Contacts />
        <Modal elModal={elModal} />
      </Layout>
    </>
  );
}
