"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import('@/components/Landing/Scene'), {
    ssr: false,
});

import styles from './model.module.scss';

export default function Landing() {
    return (
        <section className={styles.landing}>
            <Scene />
            <h1>Build to last</h1>
        </section>
    );
}