import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Article from '../pages/Article/Article';

const Router = ({ children }: any) => {
    return (
        <BrowserRouter>
            {children}
            <Routes>
                <Route path="" element={<Article />} />
                <Route path="*" element={<Navigate replace to="" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
