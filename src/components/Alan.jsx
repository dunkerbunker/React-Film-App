import React, { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectGenreOrCategory, searchMovie } from '../features/currentGenreOrCategory';
import { fetchToken } from './utils';
import { ColorModeContext } from './utils/ToggleColorMode';


const useAlan = () => {
    const { setMode } = useContext(ColorModeContext);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        alanBtn({
            key: '302f8fc4bca8f27dab8682f8a086e77a2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
              if(command === 'chooseGenre') {
                const foundGenre = genres.find((g) => g.toLowerCase() === genreOrCategory.toLowerCase());
                
                // only if genre
                if (foundGenre) {
                  history.push('/');
                  useDispatch(selectGenreOrCategory(foundGenre.id));
                } else {
                  const category = genreOrCategory.startsWith("top") ? 'top_rated' : genreOrCategory;
                  history.push('/');
                  useDispatch(selectGenreOrCategory(category));
                }
              } else if (command === 'changeMode') {
                if (mode === 'light') {
                    setMode('light');
                } else {
                    setMode('dark');
                }
              } else if (command === 'login') {
                fetchToken();
              } else if (command === 'logout') {
                localStorage.clear();
                history.push('/');
              } else if (command === 'search') {
                useDispatch(searchMovie(query));
              }
            }
        });
      }, []);
}

export default useAlan;