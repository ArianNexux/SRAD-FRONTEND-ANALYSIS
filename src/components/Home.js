import {API_ROOT_URL} from '../constants';
import useIsVisible from '../hooks/useIsVisible';
import useStickySWR from '../hooks/useStickySWR';
import {fetcher} from '../utils/commonFunctions';

import classnames from 'classnames';
import React, {useState, useRef, lazy, Suspense} from 'react';
import {Helmet} from 'react-helmet';
import {useLocation} from 'react-router-dom';
import {useLocalStorage, useSessionStorage, useWindowSize} from 'react-use';

const TimeseriesExplorer = lazy(() => import('./TimeseriesExplorer'));
const MapExplorer = lazy(() => import('./MapExplorer'));
const Actions = lazy(() => import('./Actions'));
const Table = lazy(() => import('./Table'));
const Minigraphs = lazy(() => import('./Minigraphs'));
const Footer = lazy(() => import('./Footer'));
const Search = lazy(() => import('./Search'));
const Level = lazy(() => import('./Level'));
const MapSwitcher = lazy(() => import('./MapSwitcher'));
const StateHeader = lazy(() => import('./StateHeader'));

function Home() {
  const [regionHighlighted, setRegionHighlighted] = useState({
    stateCode: 'TT',
    districtName: null,
  });

  const [anchor, setAnchor] = useLocalStorage('anchor', null);
  const [expandTable, setExpandTable] = useLocalStorage('expandTable', false);
  const [mapStatistic, setMapStatistic] = useSessionStorage(
    'mapStatistic',
    'active'
  );
  const [date, setDate] = useState('');
  const location = useLocation();


const timeseries = 
  {
    "AN": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "AP": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "AR": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "AS": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "BR": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "CH": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "CT": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "DL": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "DN": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "GA": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "GJ": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "HP": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "HR": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "JH": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "JK": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "KA": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "KL": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "LA": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "LD": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "MH": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "ML": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "MN": {
     "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "MP": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "MZ": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "NL": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "OR": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "PB": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "PY": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "RJ": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "SK": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "TG": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "TN": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "TR": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "TT": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "UN": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "UP": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "UT": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    },
    "WB": {
      "dates": {
        "2021-03-11": {
          "delta": {
            "confirmed": 244,
            "deceased": 3,
            "recovered": 258,
            "tested": 19810,
            "vaccinated": 66663
          },
          "delta7": {
            "confirmed": 1590,
            "deceased": 13,
            "recovered": 1703,
            "tested": 130507,
            "vaccinated": 715709
          },
          "total": {
            "confirmed": 577511,
            "deceased": 10286,
            "recovered": 564115,
            "tested": 8768585,
            "vaccinated": 2092262
          }
        },
        "2021-03-30": {
          "delta7": {
            "confirmed": 3902,
            "deceased": 15,
            "recovered": 2391,
            "tested": 138287,
            "vaccinated": 741525
          },
          "total": {
            "confirmed": 585305,
            "deceased": 10325,
            "recovered": 569828,
            "tested": 9131193,
            "vaccinated": 4866734
          }
        }
      }
    }
  }

  const {data} = useStickySWR(
    `${API_ROOT_URL}/data${date ? `-${date}` : ''}.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: 100000,
    }
  );

  const homeRightElement = useRef();
  const isVisible = true
  const {width} = useWindowSize();

  return (
    <React.Fragment>
      <Helmet>
        <title>Rastreador de Doenças em Angola</title>
        <meta
          name="title"
          content="Coronavirus em Angola: Latest Map and Case Count"
        />
      </Helmet>

      <div className="Home">
        <div className={classnames('home-left', {expanded: expandTable})}>
          <div className="header">
            <Suspense fallback={<div />}>
              <Search />
            </Suspense>

            {
            /*Coponente de data
            timeseries && (
              <Suspense fallback={<div style={{minHeight: '56px'}} />}>
                <Actions
                  {...{
                    setDate,
                    dates: Object.keys(timeseries['TT']?.dates).reverse(),
                    date,
                  }}
                />
              </Suspense>
            )*/}
          </div>

          <div style={{position: 'relative', marginTop: '1rem'}}>
            {data && (
              <Suspense fallback={<div style={{height: '50rem'}} />}>
                {width > 769 && (
                  <MapSwitcher {...{mapStatistic, setMapStatistic}} />
                )}
                <Level data={data['TT']} />
              </Suspense>
            )}

            {timeseries && (
              <Suspense fallback={<div style={{height: '50rem'}} />}>
                <Minigraphs timeseries={timeseries['TT']?.dates} {...{date}} />
              </Suspense>
            )}
          </div>

          {data && (
            <Suspense fallback={<div />}>
              <Table
                {...{
                  data,
                  regionHighlighted,
                  setRegionHighlighted,
                  expandTable,
                  setExpandTable,
                }}
              />
            </Suspense>
          )}
        </div>

        <div
          className={classnames('home-right', {expanded: expandTable})}
          ref={homeRightElement}
        >
          {(isVisible || location.hash) && (
            <React.Fragment>
              {data && (
                <div
                  className={classnames('map-container', {
                    expanded: expandTable,
                  })}
                >
                  <Suspense fallback={<div style={{height: '50rem'}} />}>
                    <StateHeader data={data['TT']} stateCode={'TT'} />
                    <MapExplorer
                      stateCode="TT"
                      {...{data}}
                      {...{mapStatistic, setMapStatistic}}
                      {...{regionHighlighted, setRegionHighlighted}}
                      {...{anchor, setAnchor}}
                      {...{expandTable}}
                    />
                  </Suspense>
                </div>
              )}

              {timeseries && (
                <Suspense fallback={<div />}>
                  <TimeseriesExplorer
                    stateCode="TT"
                    {...{
                      timeseries,
                      date,
                      regionHighlighted,
                      setRegionHighlighted,
                      anchor,
                      setAnchor,
                      expandTable,
                    }}
                  />
                </Suspense>
              )}
            </React.Fragment>
          )}
        </div>
      </div>

      {isVisible && (
        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>
      )}
    </React.Fragment>
  );
}

export default Home;
