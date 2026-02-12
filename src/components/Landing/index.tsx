"use client";

import styles from './style.module.scss';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Landing() {
    return (
        <section className={styles.landing}>
            <div className={styles.header1}>
                <h1>Where scent becomes memory.</h1>
            </div>

            <div className={styles.header2}>
                <h1>An invisible signature.</h1>
            </div>

            <div className={styles.circularMask}></div>
            <div className={styles.toolTips}>
                <div className={styles.toolTip}>
                    <div className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 12.6344C18 16.1465 17.4279 10.621 15.3496 11.0165C13 11.4637 11.5 16.4445 13 16.4445C14.5 16.4445 12.5 10.5 10.5 12.5556C8.5 14.6111 7.85936 17.2946 6.23526 15.3025C-1.5 5.81446 4.99998 -1.14994 8.16322 3.45685C10.1653 6.37256 6.5 16.9769 2 22" />
                            <path d="M9 21H19" />
                        </svg>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.title}>
                        <h2>Build to last</h2>
                    </div>
                    <div className={styles.description}>
                        <p>A delicate blend of light, bloom, and lasting presence.</p>
                    </div>
                </div>
                <div className={styles.toolTip}>
                    <div className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.title}>
                        <h2>Timeless by Nature</h2>
                    </div>
                    <div className={styles.description}>
                        <p>A scent shaped by elegance, inspired by the beauty of simplicity.</p>
                    </div>
                </div>
            </div>

            <div className={styles.modelContainer}></div>
        </section>
    )
}