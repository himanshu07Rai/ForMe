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







