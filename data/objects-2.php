<?php

  $draw = isset($_GET['draw'])?$_GET['draw']:1;

  echo '{
  "draw": '.$_GET['draw'].',
  "recordsTotal": 37,
  "recordsFiltered": 37,
  "data": [
    [
      "Gloria",
      "Little",
      "Systems Administrator",
      "New York",
      "2009/04/10",
      237500
    ],
    [
      "Haley",
      "Kennedy",
      "Senior Marketing Designer",
      "London",
      "2012/12/18",
      313500
    ],
    [
      "Hermione",
      "Butler",
      "Regional Director",
      "London",
      "2011/03/21",
      356250
    ],
    [
      "Herrod",
      "Chandler",
      "Sales Assistant",
      "San Francisco",
      "2012/08/06",
      137500
    ],
    [
      "Hope",
      "Fuentes",
      "Secretary",
      "San Francisco",
      "2010/02/12",
      109850
    ],
    [
      "Howard",
      "Hatfield",
      "Office Manager",
      "San Francisco",
      "2008/12/16",
      164500
    ],
    [
      "Jackson",
      "Bradshaw",
      "Director",
      "New York",
      "2008/09/26",
      645750
    ],
    [
      "Jena",
      "Gaines",
      "Office Manager",
      "London",
      "2008/12/19",
      90560
    ],
    [
      "Jenette",
      "Caldwell",
      "Development Lead",
      "New York",
      "2011/09/03",
      345000
    ],
    [
      "Jennifer",
      "Chang",
      "Regional Director",
      "Singapore",
      "2010/11/14",
      357650
    ]
  ]
}';
