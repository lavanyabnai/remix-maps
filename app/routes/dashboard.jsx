import React from "react";
import { json } from "@remix-run/node";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { NavLink, Outlet } from "@remix-run/react";
import { Disclosure } from "@headlessui/react";
import clsx from "clsx";

export async function loader({ request }) {
  return json({ message: "Hello World" });
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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

export default function SCMDashboardRoute() {
  const navigation = [
    { name: "Overview", href: "overview", current: true },
    { name: "Demand", href: "demand", current: false },
    { name: "Supply", href: "supply", current: false },
    { name: "Inventory", href: "inventory", current: false },
    { name: "Spend", href: "spend", current: false },
    { name: "Finance", href: "finance", current: false },
    { name: "Sales & Marketing", href: "sales", current: false },
    { name: "Campaign", href: "campaign", current: false },
  ];

  return (
    <>
      <div className="min-h-screen overflow-hidden">
        <Disclosure as="nav" className="bg-sky-500 ">
          {({ open }) => (
            <>
              <div className="w-full">
                <div className="flex h-16 items-center justify-center">
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
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="flex items-center justify-start rounded-md bg-sky-600 p-2 text-white hover:bg-sky-700 hover:bg-opacity-75">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-blue-900 text-white"
                          : "text-white hover:bg-blue-500 hover:bg-opacity-75",
                        "block rounded-md px-3 py-2 text-base font-medium",
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

     
      </div>
    </>
  );
}
