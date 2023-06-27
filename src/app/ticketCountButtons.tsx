"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useGetMovieQuery, useGetMoviesQuery } from "@/redux/services/movieApi";
import { shoppingCartActions } from "@/redux/features/shoppingCart";
import { selectTicketAmount } from "@/redux/features/shoppingCart/selector"
import styles from './page.module.css'

export function TicketCount({
    movieId
} : {
    movieId: string
}){
    const amount = useSelector((state) => selectTicketAmount(state, movieId));

    return(
        
        <div>{amount}</div>
          
    )
}

export default function TicketCountButtons({
    movieId
} : {
    movieId: string
}){
    const dispatch = useDispatch();
    return(
        <div className={styles.ticketCountButtons}>
            <button onClick={() => dispatch(shoppingCartActions.decrement(movieId))}>
                -
            </button>
            <TicketCount movieId={movieId}/>
            <button onClick={() => dispatch(shoppingCartActions.increment(movieId))}>
                +
            </button>
        </div>
    )
}