// components/LayoutBasic.js

import React from "react";

const LayoutBasic = ({ children }) => {
    const styles = {
        h1: {
            lineHeight: '1.6',
            fontSize:"36px",
            color: '#333'
        },
        h2: {
            lineHeight: '1.6',
            fontSize:"36px",
            color: '#333'
        },
        h3: {
            lineHeight: '1.6',
            fontSize:"36px",
            color: '#333'
        },
        p: {
            color: '#666'
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
            padding: '20px',
            backgroundColor: '#f5f5f5',
        },
        header: {
            backgroundColor: '#5A31F4',
            color: 'white',
            padding: '10px 0',
            textAlign: 'center',
        },
        title: {
            margin: 0,
        },
        main: {
            flex: 1,
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        footer: {
            textAlign: 'center',
            padding: '10px 0',
            fontSize: '0.9em',
            color: '#777',
        },
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>OgoVPN</h1>
            </header>
            <main style={styles.main}>
                {children}
            </main>
            <footer style={styles.footer}>
                <p>© {new Date().getFullYear()} OgoVPN. All rights reserved.</p>
            </footer>
        </div>

    );
};

export default LayoutBasic;
