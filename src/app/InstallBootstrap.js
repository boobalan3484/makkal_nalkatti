"use client"
import React, { useEffect } from 'react';

function InstallBootstrap() {
    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    },[]);
  return null
}

export default InstallBootstrap;