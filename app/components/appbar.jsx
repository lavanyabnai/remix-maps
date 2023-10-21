import React from "react";
import { json } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import { Disclosure } from "@headlessui/react";
import clsx from "clsx";


// eslint-disable-next-line no-unused-vars
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
    { name: "Madhya Pradesh", href: "/demo/madhya", current: true },
    { name: "Rajasthan", href: "/demo/raja", current: false },
    { name: "Telangana", href: "/demo/", current: false },
    { name: "Chhattisgarh", href: "inventory", current: false },
    { name: "Mizoram", href: "spend", current: false },
  ];

  return (
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
  );
}
