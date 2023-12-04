project_name: "single-viz-lookr-mobile"

constant: VIS_LABEL {
  value: "Single Viz2"
  export: override_optional
}

constant: VIS_ID {
  value: "single_value-marketplace"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  url: ""
  label: "@{VIS_LABEL}"
}