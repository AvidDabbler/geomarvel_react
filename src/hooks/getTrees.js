import axios from 'axios';
import React, { useEffect, useState} from 'react';

import cors from '../cors'

const API_URL = "http://localhost:3000"

const getTrees = () => {
    var config = {
        method: 'GET',
        url: `${API_URL}/getAll`,
        dataType: "json",
        contentType: "application/json",
    };
    axios(config).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
};


export default getTrees;