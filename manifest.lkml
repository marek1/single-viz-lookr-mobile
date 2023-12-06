project_name: "single-viz-lookr-mobile"

constant: VIS_LABEL {
  value: "Single Viz Lookr Mobile Pro"
  export: override_optional
}

constant: VIS_ID {
  value: "single_value_lookr_mobile_pro"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  url: ""
  label: "@{VIS_LABEL}"
}