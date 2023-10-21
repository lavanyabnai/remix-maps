/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "@remix-run/react";
import { Fragment } from "react";
import { BanknotesIcon } from "@heroicons/react/20/solid";

const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "processing",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "failed",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  // More transactions...
];
const statusStyles = {
  success: "bg-green-100 text-green-700",
  processing: "bg-yellow-100 text-yellow-700",
  failed: "bg-rose-100 text-rose-600",
};

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
];
const locations = [
  {
    name: "Party Approval",
    people: [
      {
        date: "Sep.25 - Oct.1",
        sample: "1,500	LV",
        poll: "Rasmussen Reports",
        sponsor: "Miranda Devine's Laptop from Hell",
        result: "Approve 49%	48%	Disapprove",
        net: "Approve",
      },
    ],
  },
  {
    name: "Party: General Election, 2024",
    people: [
      {
        date: "Sep.25 - Oct.1",
        sample: "1,500	LV",
        poll: "Rasmussen Reports",
        sponsor: "Miranda Devine's Laptop from Hell",
        result: "Approve 49%	48%	Disapprove",
        net: "Approve",
      },
      {
        date: "Sep.25 - Oct.1",
        sample: "1,500	LV",
        poll: "Rasmussen Reports",
        sponsor: "Miranda Devine's Laptop from Hell",
        result: "Approve	49%	48%	Disapprove",
        net: "Approve",
      },
    ],
  },
  {
    name: "Party: Republican primary,2024",
    people: [
      {
        date: "Sep.25 - Oct.1",
        sample: "1,500	LV",
        poll: "Rasmussen Reports",
        sponsor: "Miranda Devine's Laptop from Hell",
        result: "Approve 49%	48%	Disapprove",
        net: "Approve",
      },
    ],
  },
  {
    name: "Party: General Election, 2024",
    people: [
      {
        date: "Sep.25 - Oct.1",
        sample: "1,500	LV",
        poll: "Rasmussen Reports",
        sponsor: "Miranda Devine's Laptop from Hell",
        result: "Approve 49%	48%	Disapprove",
        net: "Approve",
      },
      {
        date: "Sep.25 - Oct.1",
        sample: "1,500	LV",
        poll: "Rasmussen Reports",
        sponsor: "Miranda Devine's Laptop from Hell",
        result: "Approve	49%	48%	Disapprove",
        net: "Approve",
      },
    ],
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div className="hidden sm:block">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 flex flex-col">
            <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Transaction
                    </th>
                    <th
                      className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Amount
                    </th>
                    <th
                      className="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                      scope="col"
                    >
                      Status
                    </th>
                    <th
                      className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                      scope="col"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="bg-white">
                      <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                        <div className="flex">
                          <a
                            href={transaction.href}
                            className="group inline-flex space-x-2 truncate text-sm"
                          >
                            <BanknotesIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <p className="truncate text-gray-500 group-hover:text-gray-900">
                              {transaction.name}
                            </p>
                          </a>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                        <span className="font-medium text-gray-900">
                          {transaction.amount}
                        </span>
                        {transaction.currency}
                      </td>
                      <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                        <span
                          className={classNames(
                            statusStyles[transaction.status],
                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
                          )}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                        <time dateTime={transaction.datetime}>
                          {transaction.date}
                        </time>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div className="mt-1 text-gray-500">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-900">{person.title}</div>
                        <div className="mt-1 text-gray-500">
                          {person.department}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          Active
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 p-2 bg-white rounded-lg">
        <h2 className="px-4 py-2 text-lg font-bold">
          Polls ending Sept.30,2023
        </h2>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle ">
                <table className="min-w-full">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                      >
                        DATES
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        SAMPLE
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        POLLSTER
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        SPONSOR
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        RESULT
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        NET RESULT
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {locations.map((location) => (
                      <Fragment key={location.name}>
                        <tr className="border-t border-gray-200">
                          <th
                            colSpan={5}
                            scope="colgroup"
                            className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                          >
                            {location.name}
                          </th>
                        </tr>
                        {location.people.map((person, personIdx) => (
                          <tr
                            key={person.email}
                            className={classNames(
                              personIdx === 0
                                ? "border-gray-300"
                                : "border-gray-200",
                              "border-t",
                            )}
                          >
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                              {person.date}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.sample}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.poll}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.sponsor}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.result}
                            </td>

                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.net}
                            </td>

                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                              <Link
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Edit
                                <span className="sr-only">, {person.name}</span>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
