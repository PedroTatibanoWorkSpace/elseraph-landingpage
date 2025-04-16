import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';

interface NavLinkProps extends HTMLMotionProps<"a"> {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, className, ...props }) => {
  return (
    <motion.a
      href={href}
      className={clsx(
        "hover:text-golden transition-colors relative",
        "after:content-[''] after:absolute after:bottom-0 after:left-0",
        "after:w-0 after:h-0.5 after:bg-golden",
        "after:transition-all hover:after:w-full",
        className
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
};