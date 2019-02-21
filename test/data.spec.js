require('../src/data'); // ubicacion del archivo data funcion pura


const baseDatos = {
  "MEX": {
    "indicators": [{
      "data": {
        "1960": 18.5496992049305,
        "1961": 18.303373128499,
        "1962": 18.1876016092229,
        "1963": 18.1705829911528,
        "1964": 18.1675625299417,
        "1965": 18.1277669109014,
        "1966": 18.1253179610033,
        "1967": 18.0644474661277,
        "1968": 17.9732491263076,
        "1969": 17.9198238996657,
        "1970": 17.9490277335192,
        "1971": 18.0330653592511,
        "1972": 18.1806504481714,
        "1973": 18.3276446470391,
        "1974": 18.3647275984875,
        "1975": 18.2364995724768,
        "1976": 18.194086203564,
        "1977": 17.7939523654218,
        "1978": 17.1740463971731,
        "1979": 16.5280651343565,
        "1980": 15.9841992898407,
        "1981": 15.2999466309678,
        "1982": 14.8632224771209,
        "1983": 14.6035421600812,
        "1984": 14.396192686114,
        "1985": 14.1561359130456,
        "1986": 13.9671094332221,
        "1987": 13.7667175409426,
        "1988": 13.550917507539,
        "1989": 13.3429207806673,
        "1990": 13.1603201078571,
        "1991": 13.0296975267387,
        "1992": 12.8533596256514,
        "1993": 12.6547607414833,
        "1994": 12.4584770922619,
        "1995": 12.2828978012745,
        "1996": 12.1316957121679,
        "1997": 12.0074222397064,
        "1998": 11.89550189935,
        "1999": 11.7662077084547,
        "2000": 11.5984621731556,
        "2001": 11.429352873755,
        "2002": 11.2134846845756,
        "2003": 10.9678618325563,
        "2004": 10.7244739024113,
        "2005": 10.504604213549,
        "2006": 10.2136149155823,
        "2007": 9.98347457751533,
        "2008": 9.80045363275346,
        "2009": 9.642118554643,
        "2010": 9.49233134698067,
        "2011": 9.36993790891698,
        "2012": 9.26073643031258,
        "2013": 9.15518677264519,
        "2014": 9.04424841637181,
        "2015": 8.92338814659532,
        "2016": 8.83730550109215,
        "2017": 8.69935421988486
      },
      "indicatorName": "Población de 0 a 4 años, mujeres (% de la población femenina)",
    }]
  }
}


const arrayObject = {
  1960: 18.5496992049305,
  1961: 18.303373128499,
  1962: 18.1876016092229,
  1963: 18.1705829911528,
  1964: 18.1675625299417,
  1965: 18.1277669109014,
  1966: 18.1253179610033,
  1967: 18.0644474661277,
  1968: 17.9732491263076,
  1969: 17.9198238996657,
  1970: 17.9490277335192,
  1971: 18.0330653592511,
  1972: 18.1806504481714,
  1973: 18.3276446470391,
  1974: 18.3647275984875,
  1975: 18.2364995724768,
  1976: 18.194086203564,
  1977: 17.7939523654218,
  1978: 17.1740463971731,
  1979: 16.5280651343565,
  1980: 15.9841992898407,
  1981: 15.2999466309678,
  1982: 14.8632224771209,
  1983: 14.6035421600812,
  1984: 14.396192686114,
  1985: 14.1561359130456,
  1986: 13.9671094332221,
  1987: 13.7667175409426,
  1988: 13.550917507539,
  1989: 13.3429207806673,
  1990: 13.1603201078571,
  1991: 13.0296975267387,
  1992: 12.8533596256514,
  1993: 12.6547607414833,
  1994: 12.4584770922619,
  1995: 12.2828978012745,
  1996: 12.1316957121679,
  1997: 12.0074222397064,
  1998: 11.89550189935,
  1999: 11.7662077084547,
  2000: 11.5984621731556,
  2001: 11.429352873755,
  2002: 11.2134846845756,
  2003: 10.9678618325563,
  2004: 10.7244739024113,
  2005: 10.504604213549,
  2006: 10.2136149155823,
  2007: 9.98347457751533,
  2008: 9.80045363275346,
  2009: 9.642118554643,
  2010: 9.49233134698067,
  2011: 9.36993790891698,
  2012: 9.26073643031258,
  2013: 9.15518677264519,
  2014: 9.04424841637181,
  2015: 8.92338814659532,
  2016: 8.83730550109215,
  2017: 8.69935421988486
};

const arrayOrder = [
  ["2017", 8.69935421988486],
  ["2016", 8.83730550109215],
  ["2015", 8.92338814659532],
  ["2014", 9.04424841637181],
  ["2013", 9.15518677264519],
  ["2012", 9.26073643031258],
  ["2011", 9.36993790891698],
  ["2010", 9.49233134698067],
  ["2009", 9.642118554643],
  ["2008", 9.80045363275346],
  ["2007", 9.98347457751533],
  ["2006", 10.2136149155823],
  ["2005", 10.504604213549],
  ["2004", 10.7244739024113],
  ["2003", 10.9678618325563],
  ["2002", 11.2134846845756],
  ["2001", 11.429352873755],
  ["2000", 11.5984621731556],
  ["1999", 11.7662077084547],
  ["1998", 11.89550189935],
  ["1997", 12.0074222397064],
  ["1996", 12.1316957121679],
  ["1995", 12.2828978012745],
  ["1994", 12.4584770922619],
  ["1993", 12.6547607414833],
  ["1992", 12.8533596256514],
  ["1991", 13.0296975267387],
  ["1990", 13.1603201078571],
  ["1989", 13.3429207806673],
  ["1988", 13.550917507539],
  ["1987", 13.7667175409426],
  ["1986", 13.9671094332221],
  ["1985", 14.1561359130456],
  ["1984", 14.396192686114],
  ["1983", 14.6035421600812],
  ["1982", 14.8632224771209],
  ["1981", 15.2999466309678],
  ["1980", 15.9841992898407],
  ["1979", 16.5280651343565],
  ["1978", 17.1740463971731],
  ["1977", 17.7939523654218],
  ["1969", 17.9198238996657],
  ["1970", 17.9490277335192],
  ["1968", 17.9732491263076],
  ["1971", 18.0330653592511],
  ["1967", 18.0644474661277],
  ["1966", 18.1253179610033],
  ["1965", 18.1277669109014],
  ["1964", 18.1675625299417],
  ["1963", 18.1705829911528],
  ["1972", 18.1806504481714],
  ["1962", 18.1876016092229],
  ["1976", 18.194086203564],
  ["1975", 18.2364995724768],
  ["1961", 18.303373128499],
  ["1973", 18.3276446470391],
  ["1974", 18.3647275984875],
  ["1960", 18.5496992049305]
];

const arrayOrder2 = [
  ["1960", 18.5496992049305],
  ["1974", 18.3647275984875],
  ["1973", 18.3276446470391],
  ["1961", 18.303373128499],
  ["1975", 18.2364995724768],
  ["1976", 18.194086203564],
  ["1962", 18.1876016092229],
  ["1972", 18.1806504481714],
  ["1963", 18.1705829911528],
  ["1964", 18.1675625299417],
  ["1965", 18.1277669109014],
  ["1966", 18.1253179610033],
  ["1967", 18.0644474661277],
  ["1971", 18.0330653592511],
  ["1968", 17.9732491263076],
  ["1970", 17.9490277335192],
  ["1969", 17.9198238996657],
  ["1977", 17.7939523654218],
  ["1978", 17.1740463971731],
  ["1979", 16.5280651343565],
  ["1980", 15.9841992898407],
  ["1981", 15.2999466309678],
  ["1982", 14.8632224771209],
  ["1983", 14.6035421600812],
  ["1984", 14.396192686114],
  ["1985", 14.1561359130456],
  ["1986", 13.9671094332221],
  ["1987", 13.7667175409426],
  ["1988", 13.550917507539],
  ["1989", 13.3429207806673],
  ["1990", 13.1603201078571],
  ["1991", 13.0296975267387],
  ["1992", 12.8533596256514],
  ["1993", 12.6547607414833],
  ["1994", 12.4584770922619],
  ["1995", 12.2828978012745],
  ["1996", 12.1316957121679],
  ["1997", 12.0074222397064],
  ["1998", 11.89550189935],
  ["1999", 11.7662077084547],
  ["2000", 11.5984621731556],
  ["2001", 11.429352873755],
  ["2002", 11.2134846845756],
  ["2003", 10.9678618325563],
  ["2004", 10.7244739024113],
  ["2005", 10.504604213549],
  ["2006", 10.2136149155823],
  ["2007", 9.98347457751533],
  ["2008", 9.80045363275346],
  ["2009", 9.642118554643],
  ["2010", 9.49233134698067],
  ["2011", 9.36993790891698],
  ["2012", 9.26073643031258],
  ["2013", 9.15518677264519],
  ["2014", 9.04424841637181],
  ["2015", 8.92338814659532],
  ["2016", 8.83730550109215],
  ["2017", 8.69935421988486]
];


const arrayMax = [6.52887144967165, 6.50807930814936, 6.46624506287583, 6.40835332702602, 6.34212660680005, 6.27250267155005, 6.19406546541286, 6.10880690447071, 6.0357030369614, 6.001102266822, 6.01859519136984, 6.07914899425235, 6.19492526077519, 6.33617288686383, 6.45892997488834, 6.5397831590455, 6.59403035180194, 6.60402717945661, 6.60280746315036, 6.63988199078088, 6.7402031057473, 6.89867166989701, 7.11097330900161, 7.34518075287614, 7.55247360903786, 7.70376392799977, 7.80873819826125, 7.86702719698948, 7.89375894639822, 7.91479324430377, 7.94561347737007, 7.97942566970874, 8.01978553394076, 8.06284115492391, 8.10273138663453, 8.135629674548, 8.17291600628513, 8.20564606180758, 8.22366939994749, 8.211726296777, 8.16119823085227, 8.07672933855692, 7.95848373028505, 7.81913947102186, 7.67677153050232, 7.54369095758579, 7.42332384949091, 7.31172608663509, 7.2158685097528, 7.14447792606698, 7.1023678210014, 7.08901085746588, 7.10477407530499, 7.14510357120215, 7.20304797668607, 7.27255815219228, 7.35899328520488, 7.45632241411065];

describe('es un Objeto llamado WorldBank', () => { // test si es un objeto

  it('is an object', () => {
    expect(typeof window.worldBank).toBe('object');
  });
});

describe('es una función llamada filtroPaís', () => { // test si es funcion filtro pais

  it('is a function', () => {
    expect(typeof window.worldBank.filtroPais).toBe('function');
  });


  it('Debe regresar las datos del Indicador y Pais que selecciona el usuario', () => { //Test de funcion Filtro, 
    expect(window.worldBank.filtroPais(baseDatos, 'MEX', 'Población de 0 a 4 años, mujeres (% de la población femenina)')).toEqual(baseDatos.MEX.indicators[0].data);

  });

  it('Debe regresar el numero maximo porcentual', () => { //Test de funcion Maximo, 
    expect(window.worldBank.objMax('max', arrayMax)).toEqual(8.22366939994749);
  });

  it('Debe regresar el numero minimo porcentual', () => { //Test de funcion Minimo, 
    expect(window.worldBank.objMax('min', arrayMax)).toEqual(6.001102266822);
  });


});
describe('es una función llamada OrderByAsc', () => { // test si es funcion ordenar
  it('is a function', () => {
    expect(typeof window.worldBank.orderByAsc).toBe('function');
  });
  it('la función esta definida', () => {
    expect(window.worldBank.orderByAsc()).toBeDefined();
  });
  it('Dede ordenar de forma ascendente la data', () => {
    expect(window.worldBank.orderByAsc('asc', arrayObject)).toEqual(arrayOrder);
  });
  it('Dede ordenar de forma descendente la data', () => {
    expect(window.worldBank.orderByAsc('desc', arrayObject)).toEqual(arrayOrder2);
  });
});
