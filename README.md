# RakshaNetra demonstration dataset

This folder contains the sample data currently hard-coded into the RakshaNetra prototype. Each CSV file opens directly in Microsoft Excel, Google Sheets, LibreOffice Calc, or can be imported into a database.

## Files

- `rakshanetra_demo_stats.csv` - dashboard summary metrics
- `rakshanetra_demo_incidents.csv` - incident stream records
- `rakshanetra_demo_activity_trend.csv` - FIR and flag counts by time
- `rakshanetra_demo_face_matches.csv` - historical face/re-identification match examples
- `rakshanetra_demo_fir_entities.csv` - entities extracted from the sample FIR
- `rakshanetra_demo_fir_case_matches.csv` - similar-case and modus operandi matches
- `rakshanetra_demo_network_nodes.csv` - suspects, vehicles, locations and FIR nodes
- `rakshanetra_demo_network_edges.csv` - relationships between network nodes
- `rakshanetra_demo_gis_hotspots.csv` - crime hotspot map points
- `rakshanetra_demo_patrol_route.csv` - simulated patrol route steps
- `rakshanetra_demo_xai_evidence.csv` - demonstration evidence contribution weights
- `rakshanetra_demo_target_profile.csv` - simulated target-analysis attributes
- `rakshanetra_demo_fir_records.csv` - structured version of the sample FIR input
- `rakshanetra_demo_patrol_units.csv` - simulated patrol-unit metadata
- `data_dictionary.csv` - field definitions and suggested types

## Important data notice

These are synthetic demonstration records created for the interface. The project does not currently connect to real CCTV, police records, telecom records, social media, dark-web sources, biometric databases, or a live GIS service. Names, identifiers, locations, scores and counts must not be presented as real operational evidence.

The face similarity, M.O. similarity, accuracy, confidence and evidence contribution values are illustrative UI values, not validated model outputs. For a real deployment, use authorized data sources, documented consent and legal basis, access controls, audit logs, retention rules, bias testing, model validation and human review.

## Suggested reuse

Use the node and edge files together for the network graph. Use the FIR entity and case-match files together for the FIR module. Use the hotspot and patrol files together for GIS planning. Import each file as a separate worksheet or database table to preserve relationships.
