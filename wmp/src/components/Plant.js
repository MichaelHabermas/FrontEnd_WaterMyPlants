import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import plantData from '../plantData'

function Plant() {
    return (
        <div>
            <h2>{plantData.key}</h2>
            <div>{plantData.image}</div>
            <p>{plantData.species}</p>
            <p>{plantData.nickname}</p>
        </div>
        )
    }

export default Plant;