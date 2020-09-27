# GQL Proxy for 104 job resource
Because the 104 open API not work, so I want to create one.

## Reverse engineering

### GET jobs/search/list

```
GET https://{host}/jobs/search/list
    ?ro={}
    &isnew={}
    &kwop={}
    &keyword={}
    &expansionType={}
    &area={}
    &order={}
    &asc={}
    &page={}
    &mode={}
    &jobsource={} 
    HTTP/1.1
Referer: https://{host}/jobs/search/
         ?ro={}
         &isnew={}
         &kwop={}
         &keyword={}
         &expansionType={}
         &area={}
         &jobsource={}
```

The job search API endpoints on 104 website,
I guess the Referer in Header is reference,
the target href will referer to that reference 
and get data by filters such as order, asc, page ...etc

#### QueryString: 
 - ro: filter by major category, 
 - isnew: the latest data limit by number
 - kwop: unknown yet
 - keyword: search keyword
 - expansionType: unknown yet
 - area: search filter by area
 - order: unknown yet
 - asc: data flow is increment or not
 - page: data split by page index
 - mode: unknown yet
 - jobsource: unknown yet

#### Major Category
0. all
1. full time
2. part time
3. executive
4. temp worker
5. case job
6. tutor

#### Area:
- TaipeiCity: 6001001000
- NewTaipeiCity: 6001002000