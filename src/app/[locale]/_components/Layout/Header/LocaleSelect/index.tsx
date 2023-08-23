"use client";

import React, { useCallback, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import LocaleItem from "./LocaleItem";
import { AnimatePresence, motion } from "framer-motion";
import { useAppLocale } from "../../../Locale";
import { useClickOutside } from "@mantine/hooks";

const locales = [
  { label: "Français", locale: "fr" },
  { label: "English", locale: "en" },
  { label: "Deutsch", locale: "de" },
  { label: "Italiano", locale: "it" },
  { label: "Español", locale: "es" },
];

const LocaleSelect: React.FC = () => {
  const { locale } = useAppLocale();
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useClickOutside<HTMLUListElement>(
    useCallback(() => setIsOpen(false), [])
  );

  return (
    <div className="relative flex items-center gap-10 justify-self-end grid-area-[span_1_/_span_1_/_span_1_/_span_1]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-x-1 rounded-full border border-neutral-700 py-3 pl-6 pr-5 text-zinc-200"
      >
        <p className="font-extrabold uppercase">{locale}</p>
        <BiChevronDown className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={listRef}
            variants={{
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
            }}
            initial="initial"
            animate="animate"
            exit="initial"
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute right-0 top-full z-30 mt-2 rounded-2xl border border-neutral-700 bg-neutral-950 py-4 text-zinc-200"
          >
            {locales.map(({ locale, label }) => (
              <li key={locale}>
                <LocaleItem targetLocale={locale}>{label}</LocaleItem>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocaleSelect;
