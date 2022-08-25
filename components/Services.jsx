import React from "react";

function Services() {
  return (
    <div className="my-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
      <a
        href="https://nextjs.org/docs"
        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
      >
        <h3 className="text-2xl font-bold">Family Events &rarr;</h3>
        <p className="mt-4 text-xl">
          Check out some family events we organized before...
        </p>
      </a>

      <a
        href="https://nextjs.org/learn"
        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
      >
        <h3 className="text-2xl font-bold">Business Events &rarr;</h3>
        <p className="mt-4 text-xl">
          Check out some business events we organized before...
        </p>
      </a>
    </div>
  );
}

export default Services;
