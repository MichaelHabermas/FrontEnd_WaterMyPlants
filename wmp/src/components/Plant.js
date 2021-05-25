import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import plantData from '../plantData'

const plant = []

function Plant() {
    return (
        <div className='plants'>
            {plantData.map((data) => (
                <div className='plant'>{plant}</div>
            ))}
        </div>
    )
}

export default Plant;