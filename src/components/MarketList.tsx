import { Box, InputAdornment, OutlinedInput, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import withWidth from "@material-ui/core/withWidth";
import React, { useEffect, useState } from 'react';
// @ts-ignore: Unreachable code error
import EthImg from '../images/eth2-img.svg';
const NTImg = require("../images/NT.png");

interface IMarketList {

    width: string
}

const MarketList = ({ width }: IMarketList) => {

    const useStyles = makeStyles((theme) => ({

    }));
    const classes = useStyles();

    return (
        <Box>
            asdasd
        </Box>
    )
}

export default MarketList;