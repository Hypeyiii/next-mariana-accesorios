"use client";

import { usePathname } from "next/navigation";
import { TBreadCrumbProps } from "@/lib/types";
import Link from "next/link";

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname() || "";
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className="flex w-[90%] m-auto justify-start items-start mt-24 text-xs uppercase">
      <ul className={`${containerClasses} flex flex-row gap-x-2 items-center`}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses = paths === href ? `active-breadcrumb` : "";
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <section key={index} className="flex flex-row gap-2">
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </section>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
