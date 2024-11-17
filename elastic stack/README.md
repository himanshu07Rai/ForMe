## Elastic Search

- Open source analytics and full search engine.
- Built in Java


## Kibana

- Dashboard for analysing and Visualization


## Logstash

- Process Logs from applications and send them to elastic search.
- server side data processing pipeline that ingests data from a multitude of sources, transforms it, and then sends it to `stask` (kafka/elastic search)

```dos
new line log file event -> Logstash -> kafka/Elastic Search
```

## X-Pack

- Adds additional features to the Elasticsearch and Kibana
    - Security (Authentication and Authorisation)
    - Monitors the performance of elastic stack and get notified
    - Enables machine learning on Kibana and elastic serach
    - Graph -> for recommendations. It exposes an API that we can integrate in out application.
    - Elasticsearch SQL
        - SQL API: SQL query -> Result
        - Translate API: SQL query -> Query DSL

## Beats

- Collection of data shippers. Lightweight agents which send data from hundreds or thousands of machines and systems to Logstash or elasticserach





---

Document === Row \
Field === Column \
index === table


```json
{
..
..
..
_index:
_source:{
    ..
    ..
    ..
    }
}
```

- documents as grouped together by indices


### Sharding

- Sharding is a way to divide indices into smaller pieces

- Sharding is done at index level

- Sharding improves performance by parallelization of queries


### Replication

- Creation of copies of shards.
- Replication Group = combination of primary shard and its replicas


### Nodes

- Master Node - The master node is responsible for lightweight cluster-wide actions such as creating or deleting and index, tracking which nodes are part of the cluster and deciding which shards to allocate to which nodes.

- Data Node - Data nodes hold the shards that contain the documents we have indexed

- others....


### Routing

- The process of resolving a shard for a document


### Commands

| **Operation**                          | **Curl Command**                                                                                                                     |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| **Create Index**                       | `curl -X PUT 'http://localhost:9200/index_name'`                                                                                      |
| **Delete Index**                       | `curl -X DELETE 'http://localhost:9200/samples'`                                                                                     |
| **List All Indices**                   | `curl -X GET 'http://localhost:9200/_cat/indices?v'`                                                                                 |
| **List All Documents in Index**        | `curl -X GET 'http://localhost:9200/sample/_search'`                                                                                 |
| **List Index Mapping**                 | `curl -X GET 'http://localhost:9200/samples'`                                                                                         |
| **Back Up Index**                      | `curl -XPOST --header 'Content-Type: application/json' http://localhost:9200/_reindex -d '{ "source": { "index": "samples" }, "dest": { "index": "samples_backup" }}'` |
| **Query Using URL Parameters**         | `curl -X GET 'http://localhost:9200/samples/_search?q=school:Harvard'`                                                                |
| **Query Using JSON (ElasticSearch Query DSL)** | `curl -XGET --header 'Content-Type: application/json' http://localhost:9200/samples/_search -d '{ "query" : { "match" : { "school": "Harvard" } }}'` |
| **Return Specific Fields in Query**    | `curl -X GET 'http://localhost:9200/filebeat-7.6.2-2020.05.05-000001/_search' -d '{ "_source": ["suricata.eve.timestamp","source.geo.region_name","event.created"], "query": { "match" : { "source.geo.country_iso_code": "GR" } }}'` |
| **Query by Date**                      | `curl -X GET 'http://localhost:9200/filebeat-7.6.2-2020.05.05-000001/_search' -d '{ "query": { "range" : { "event.created": { "gte" : "now-7d/d" } }} }'` |
| **Add Data to Index**                  | `curl -X PUT --header 'Content-Type: application/json' http://localhost:9200/samples/_doc/1 -d '{ "school" : "Harvard" }'`           |
| **Update Document**                    | `curl -X PUT --header 'Content-Type: application/json' http://localhost:9200/samples/_doc/2 -d '{ "school": "Clemson" }'` <br> `curl -X POST --header 'Content-Type: application/json' http://localhost:9200/samples/_doc/2/_update -d '{ "doc" : { "students": 50000 } }'` |
| **Bulk Load Data**                     | `export pwd="elastic:"` <br> `curl --user $pwd -H 'Content-Type: application/x-ndjson' -XPOST 'https://58571402f5464923883e7be42a037917.eu-central-1.aws.cloud.es.io:9243/0/_bulk?pretty' --data-binary @<file>` |
| **Show Cluster Health**                | `curl --user $pwd -H 'Content-Type: application/json' -X GET 'https://58571402f5464923883e7be42a037917.eu-central-1.aws.cloud.es.io:9243/_cluster/health?pretty'` |
| **Aggregation Example (Web Hits by City)** | `curl -X GET --user $pwd --header 'Content-Type: application/json' https://58571402f5464923883e7be42a037917.eu-central-1.aws.cloud.es.io:9243/logstash/_search?pretty -d '{ "aggs": { "cityName": { "terms": { "field": "geoip.city_name.keyword", "size": 50 } } }}'` |
| **Aggregation Example (Product Response Count by City)** | `curl -X GET --user $pwd --header 'Content-Type: application/json' https://58571402f5464923883e7be42a037917.eu-central-1.aws.cloud.es.io:9243/logstash/_search?pretty -d '{ "aggs": { "city": { "terms": { "field": "geoip.city_name.keyword" }, "aggs": { "responses": { "terms": { "field": "response" } } } } }, "responses": { "terms": { "field": "response" } } } }'` |
| **Basic Authentication for Curl**      | `curl -X GET 'http://localhost:9200/_cat/indices?v' -u elastic:(password)`                                                            |
| **Pretty Print the Response**          | `curl -X GET 'http://localhost:9200/(index)/_search?pretty=true'`                                                                     |








