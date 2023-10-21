/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link, NavLink } from "@remix-run/react";
import { useState, Fragment } from "react";
import { XMarkIcon, InboxArrowDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Transition, Dialog, Disclosure } from "@headlessui/react";
import { BiFemale, BiMale } from "react-icons/bi";
import raja from "~/data/map/raja.png";
import bjp from "~/data/map/logo/BJP.png";
import bsp from "~/data/map/logo/BSP.png";

import inc from "~/data/map/logo/INC.png";
import user from "~/data/map/logo/user.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const summary = [
  {
    type: "Total Number of Assembly Constituencies",
    total: "200",
  },
  {
    type: "Total Number of Electors 2023",
    total: "52,680,545",
  },
  {
    type: "Total Number of Polling Stations 2023",
    total: "51,756",
  },
  {
    type: "Total Number of Polling Stations 2023",
    total: "86",
  },
  {
    type: "Total Candidate Contested in 2018",
    total: "2,294",
  },
  {
    type: "Date of Poll",
    total: "25.11.2023",
  },
  {
    type: "Date of Counting Votes",
    total: "03.12.2023",
  },
  {
    type: "Current Term Ending Date",
    total: "14.01.2024",
  },
];
const projects = [
  {
    img: bjp,
    imgName: "BJP",
    name: "SEATS",
    initials: "BJP",
    href: "#",
    members: 16,
    won: 24,
    Contested: 24,
  },
  {
    img: inc,
    imgName: "INC",
    name: "SEATS",
    initials: "T",
    href: "#",
    members: 1,
    won: 0,
    Contested: 25,
  },
  {
    img: user,
    imgName: "RLTP",
    name: "SEATS",
    initials: "CD",
    href: "#",
    members: 0,
    won: 1,
    Contested: 1,
  },
  {
    img: bsp,
    imgName: "GGP",
    name: "SEATS",
    initials: "T",
    href: "#",
    members: 16,
    won: 0,
    Contested: 20,
  },
  {
    img: user,
    imgName: "BTP",
    name: "SEATS",
    initials: "T",
    href: "#",
    members: 16,
    won: 0,
    Contested: 4,
  },
];

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      prefetch="intent"
      className={({ isActive }) =>
        clsx(
          "rounded-md px-2 py-2 text-md font-semibold md:px-3",
          isActive
            ? "py-2 bg-sky-600 text-white font-bold bg-opacity-75 border"
            : "text-white hover:bg-sky-300 hover:bg-opacity-75",
        )
      }
      aria-current={({ isActive }) => (isActive ? "page" : undefined)}
    >
      {children}
    </NavLink>
  );
}
export default function DemandRoute() {
  const [open, setOpen] = useState(false);
  const navigation = [
    { name: "Madhya Pradesh", href: "/demo/madhya", current: false },
    {
      name: "Rajasthan",
      href: "/demo/rajasthan",
      current: true,
    },
    {
      name: "Telangana",
      href: "/demo/telangana",
      current: false,
    },
    {
      name: "Chhattisgarh",
      href: "/demo/chhattisgarh",
      current: false,
    },
    { name: "Mizoram", href: "/demo/mizoram", current: false },
  ];
  return (
    <>
      <div className="overflow-hidden">
        <Disclosure as="nav" className="bg-sky-500 ">
          {({ open }) => (
            <>
              <div className="w-full">
                <div className="flex h-12 items-center justify-center">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className=" ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <NavItem to={item.href} key={item.name}>
                            {item.name}
                          </NavItem>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>

      <div className="m-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white shadow-xl shadow-slate-900/10 relative flex flex-1 flex-col p-3 ">
          <div className="mt-2 flex justify-center gap-2">
            <h3 className="text-base font-medium uppercase text-gray-900">
              rajasthan
            </h3>
          </div>

          <img className="flex items-center h-40" src={raja} alt="map" />
        </div>
        <div className="rounded-lg bg-white shadow-xl shadow-slate-900/10 p-3">
          <div className="m-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="p-3 rounded-md border">
              <h3 className="flex justify-center text-md font-medium text-gray-900 p-1 border-b">
                ELECTORAL FEATURES
              </h3>

              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="p-2 rounded-lg border">
                  <span className="flex justify-center p-1">
                    <p className="text-sm">ELECTORS : </p>
                    <h3 className="text-sm font-semibold ml-1">48,819,246</h3>
                  </span>

                  <div className="my-2 grid grid-cols-2 gap-2 mb-2">
                    <div className="flex justify-center align-middle">
                      <BiMale className="h-7 w-7" />
                    </div>
                    <div className="flex justify-center align-middle">
                      <BiFemale className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-indigo-600"
                      style={{
                        width: `calc((2 * 2 + 1) / 8 * 100%)`,
                      }}
                    />
                  </div>
                  <span className="flex p-1">
                    <p className="flex items-center text-xs">SEX RATIO : </p>
                    <h3 className="ml-1 text-xs font-semibold p-1 bg-gray-500 rounded-md text-white">
                      920
                    </h3>
                  </span>
                  <div>
                    <span className="flex mt-1 p-1">
                      <p className=" flex items-center text-xs">POLLDATE : </p>
                      <h3 className="ml-1 text-xs font-semibold p-1 bg-gray-500 rounded-md text-white">
                        APRIL & MAY
                      </h3>
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-lg border">
                  <div className="mt-4 flex items-center justify-center">
                    <span className="p-3 bg-gray-100 border rounded-full">
                      <InboxArrowDownIcon className="h-7 w-7 rounded-full  text-gray-500 " />
                    </span>
                  </div>
                  <span className="flex p-2 justify-stretch mt-1">
                    <p className=" flex items-center text-xs">VOTES :</p>
                    <h3 className="ml-1 text-xs font-semibold p-1 bg-gray-500 rounded-md text-white">
                      32,441,064
                    </h3>
                  </span>
                  <span className="flex p-2">
                    <p className=" flex items-center text-xs">POLLING</p>
                    <span className="ml-1 text-xs font-semibold p-1 bg-gray-500 rounded-md text-white">
                      51,965
                    </span>
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="flex justify-center text-md font-medium text-gray-900 p-1  border-b">
                  ELECTION RESULT ANALYSIS
                </h3>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="bg-white rounded-lg pb-4 border">
                  <h2 className="flex justify-center bg-gray-500 p-1 text-white">
                    WINNER (BJP)
                  </h2>
                  <div className="mt-4 flex justify-center">
                    <img className="h-7 w-7" src={bjp} alt="bjp" />
                  </div>
                  <p className="mt-2 flex justify-center text-sm">VOTE</p>
                  <p className=" mb-2 pb-2 flex justify-center text-xs">
                    18,968,392 (58.47%)
                  </p>
                </div>

                <div className="bg-white rounded-lg pb-4 border">
                  <h2 className="flex justify-center bg-gray-500 p-1 text-white">
                    RUNNER-UP (INC)
                  </h2>
                  <div className="mt-4 flex justify-center">
                    <img className="h-7 w-7" src={inc} alt="inc" />
                  </div>
                  <p className="mt-2 flex justify-center text-sm">VOTE</p>
                  <p className="mb-2 pb-2 flex justify-center text-xs">
                    11,107,910 (34.24%)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2 rounded-md bg-white border">
              <h3 className="flex justify-center text-md font-medium text-gray-900 p-1 border-b">
                TOP 5 PARTIES
              </h3>

              <div className="px-1 py-2 grid grid-cols-2 gap-2">
                {projects.map((project) => (
                  <li
                    key={project.name}
                    className="col-span-1 flex rounded-md shadow-sm mt-2"
                  >
                    <div className="w-12 p-1 bg-white border rounded-l-md">
                      <img
                        className="m-2 rounded-full w-6 h-6"
                        src={project.img}
                        alt="image"
                      />
                      <span className="m-2 text-black text-xs">
                        {project.imgName}
                      </span>
                    </div>

                    <div className="flex flex-1 items-center justify-between truncate rounded-r-md border border-gray-200 bg-white p-3">
                      <div className="flex-1 truncate  text-sm">
                        <a
                          href={project.href}
                          className="flex justify-center text-md font-medium text-gray-900 p-1 border-b"
                        >
                          {project.name}
                        </a>
                        <div>
                          <span className="flex p-1">
                            <p className="text-xs">Won :</p>
                            <h3 className="text-xs font-semibold ml-1">
                              {project.won}
                            </h3>
                          </span>
                          <span className="flex p-1">
                            <p className="flex text-xs">Contested :</p>
                            <h3 className="text-xs font-semibold ml-1">
                              {project.Contested}
                            </h3>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
                <div className="mt-1 py-2 bg-white rounded-md border">
                  <span className="flex justify-center text-xs ">
                    Others & Independents Seats
                  </span>
                  <div className="flex justify-center items-center p-1">
                    <span className="flex justify-center p-1 bg-gray-200">
                      <p className="text-xs">Won : </p>
                      <h3 className="text-xs font-semibold ml-1">0</h3>
                    </span>
                    <span className="flex pl-1 justify-center p-1 bg-gray-100">
                      <p className="text-xs">Contested : </p>
                      <h3 className="text-xs font-semibold ml-1">175</h3>
                    </span>
                  </div>
                  <span className="flex justify-center text-xs ">Total</span>
                  <div className="flex justify-center items-center p-1">
                    <span className="flex justify-center p-1 bg-gray-200">
                      <p className="text-xs">Seats : </p>
                      <h3 className="text-xs font-semibold ml-1">25</h3>
                    </span>
                    <span className="flex pl-1 justify-center p-1 bg-gray-100">
                      <p className="text-xs">Contestants : </p>
                      <h3 className="text-xs font-semibold ml-1">249</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white px-4">
            <div className="p-4 ring-1 ring-gray-200 sm:mx-0 sm:rounded-lg ">
              <div className="items-center overflow-x-auto align-middle">
                <table className="min-w-full divide-y divide-gray-300 ">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="bg-gray-100 px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10"
                      ></th>

                      <th
                        scope="col"
                        className="bg-blue-50 py-3.5 pl-4 pr-4 text-center text-sm font-semibold text-blue-600 ring-blue-500/10"
                      >
                        Rajasthan
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {summary.map((summary) => (
                      <tr key={summary} className="mx-2 even:bg-gray-100">
                        <td className="whitespace-nowrap p-4 text-left text-sm font-medium text-gray-900 ">
                          {summary.type}
                        </td>

                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-center text-sm font-medium sm:pr-0">
                          <Link
                            href="#"
                            className="text-blue-500 hover:text-blue-900 hover:underline"
                          >
                            {summary.total}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="bg-blue-900 px-4 py-4">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="py-1 text-base font-semibold leading-6 text-white">
                              Create Alerts
                            </Dialog.Title>

                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="rounded-md  text-slate-300 outline-none hover:text-white "
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-2">
                          <div className="rounded-lg border bg-gray-100 p-2">
                            <h2 className="text-base font-medium leading-6 text-gray-900 ">
                              {" "}
                              Query Condition
                            </h2>
                          </div>

                          <div className="mt-6 pt-4">
                            <div className="rounded-lg border bg-gray-100 p-2">
                              <h2 className="text-base font-medium leading-6 text-gray-900 ">
                                {" "}
                                Incident Type/Priority
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center p-2">
                        <button
                          type="button"
                          className="text-md rounded-md border bg-indigo-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
