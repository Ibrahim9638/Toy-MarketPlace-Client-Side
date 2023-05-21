import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle('Blog')
  return (
    <div className="max-h-screen">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-[#dcfce7] py-4 rounded "
      >
        <div className="max-w-6xl mx-auto">
          <div className="collapse-title text-xl font-extrabold text-[#065f46]">
            Question-1: What is an access token and refresh token? How do they
            work and where should we store them on the client-side?
          </div>
          <div className="collapse-content text-[#065f46] text-lg">
            <p>
              A refresh token just helps you re-validate a user without them
              having to re-enter their login credentials multiple times. The
              access token is re-issued, provided the refresh token is a valid
              one requesting permission to access confidential resources.
              <br />
              Access tokens and refresh tokens are commonly used in
              authentication and authorization systems. <br /> <b>Access Token:</b> An
              access token is a credential that represents the authorization
              granted to a client to access specific resources or perform certain actions. It is usually a
              short-lived token with an expiration time. The access token is
              sent with each request to the server to authenticate and authorize
              the client. they are  Memory Storing, Browser Storage, HTTP-Only Cookies.
              <br />
              <b>Refresh Token:</b> Refresh token is a long-lived token that is used to obtain a new access token after the current access token expires. It allows the client to request a new access token without requiring the user to re-enter their credentials. they are Server-side storage,Secure HTTP-only Cookies.
            </p>
          </div>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-[#dcfce7] py-4 rounded "
      >
        <div className="max-w-6xl mx-auto">
          <div className="collapse-title text-xl font-extrabold text-[#14532d]">
            Question-2: Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content text-[#14532d] text-lg">
            <p>
            SQL(Structured Query Language) and NoSQL (Not Only SQL) they are two different types of database management systems, each with its own strengths and use cases.
            <br />
            <b>SQL:</b> SQL databases follow a rigid, predefined schema where data is organized into tables with rows and columns. SQL databases are generally vertically scalable, meaning they scale up by adding more resources to a single server. They are use a standardized query language for defining, manipulating, and retrieving data
            <br />
            <b>NoSQL: </b>NoSQL databases have a flexible schema or schema-less design, allowing for dynamic and unstructured data. They typically use a variety of data models, including key-value, document, columnar, and graph, which provide more flexibility in storing and retrieving data.NoSQL databases are designed to be horizontally scalable, allowing them to handle large volumes of data and traffic by distributing data across multiple servers
            </p>
          </div>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-[#dcfce7] py-4 rounded "
      >
        <div className="max-w-6xl mx-auto">
          <div className="collapse-title text-xl font-extrabold text-[#14532d]">
            Question-3: What is express js? What is Nest JS?
          </div>
          <div className="collapse-content text-[#14532d] text-lg">
            <p>
              <b>Express. Js:</b> Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage and hybrid web application. Its a layer built on the top of the Node js that helps manage servers and routes.
              <br />
              <b>Next. Js:</b> Nest js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript
            </p>
          </div>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-plus border border-base-300 bg-[#dcfce7] py-4 rounded "
      >
        <div className="max-w-6xl mx-auto">
          <div className="collapse-title text-xl font-extrabold text-[#14532d]">
            Question-4: What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content text-[#14532d] text-lg">
            <p>
              <b>MongoDB Aggregate: </b> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
