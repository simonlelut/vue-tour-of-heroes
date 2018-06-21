import axios, {AxiosResponse} from 'axios';

import Hero  from '../models/hero';

const api = 'http://localhost:3000/heroes/';

const options = { headers: { 'crossDomain': true }}

import {store} from "./message.service"



class HeroService {

    log(message: string) {
        store.state.messages.push(message);
    }

    deleteHero(hero: Hero) : Promise< void | AxiosResponse<Hero>> {
        return axios.delete(`${api}${hero._id} `)
            .then((response) => {
                this.log(`deleted hero id=${hero._id}`)
                return response

            }).catch((error)=>{
                this.log(error.response.data);
                return;
            });
    };

    getHero(id: string) : Promise< void | AxiosResponse<Hero>> {
        return axios.get<Hero>(`${api}` + id, options)
            .then((response) => {
            this.log(`fetched hero id=${id}`)
            return response;
        }).catch((error)=>{
            this.log(error.response.data);
            return;
        });
    }
    getHeroes() : Promise< void | AxiosResponse<Hero[]>> {
        return axios.get<Hero[]>(`${api}`,options)
            .then((response) => {
                this.log(`fetched heroes`);
                return response

            }).catch((error)=>{
                this.log(error.response.data);
                return;
            });
    }
    addHero(heroName: string) : Promise< void | AxiosResponse<Hero>> {
        return axios.post(`${api}`, { name: heroName })
            .then((response) => {
                this.log(`add an hero`);
                return response

            }).catch((error)=>{
                this.log(error.response.data);
                return;
            });
    }
    updateHero(hero: Hero) : Promise< void | AxiosResponse<Hero>> {
        return axios.put(`${api}${hero._id}`, { name: hero.name })
            .then((response) => {
                this.log(`updated hero id=${hero._id}`);
                return response

            }).catch((error)=>{
                this.log(error.response.data);
                return;
            });
    }

    /* GET heroes whose name contains search term */
    searchHeroes(term: string): Promise< void | AxiosResponse<Hero[]>>  {

        return axios.get<Hero[]>(`${api}?name=${term}`,options)
            .then((response) => {

                if(response.status === 204){
                    this.log(`no heroes matching with  "${term}`);
                    return;
                }

                this.log(`${response.data.length} heroes matching with "${term}`);
                return response

            }).catch((error)=>{
                this.log(error.reponse);
                return;
            });
    }
}

export const heroService = new HeroService();
