'use client';
import Link, { LinkProps } from 'next/link';
import styles from './MenuLink.module.css';

interface TextLinkProps extends LinkProps {
    text: string,
    href: string
}

export default function MenuLink({text, href}: TextLinkProps) {
    return (
        <Link href={href} className={styles.link}>{text}</Link>
    );
}