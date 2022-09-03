import { withTheme } from '@rjsf/core';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { BsPlus } from '@react-icons/all-files/bs/BsPlus';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { getUiOptions, getTemplate, getInputProps, ADDITIONAL_PROPERTY_FLAG, canExpand, getSubmitButtonOptions, processSelectValue } from '@rjsf/utils';
import Form$1 from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { IoIosRemove } from '@react-icons/all-files/io/IoIosRemove';
import { AiOutlineArrowUp } from '@react-icons/all-files/ai/AiOutlineArrowUp';
import { AiOutlineArrowDown } from '@react-icons/all-files/ai/AiOutlineArrowDown';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var AddButton = function AddButton(props) {
  return React.createElement(Button, _extends({}, props, {
    style: {
      width: "100%"
    },
    className: "ml-1 " + props.className,
    title: "Add Item"
  }), React.createElement(BsPlus, null));
};

var ArrayFieldItemTemplate = function ArrayFieldItemTemplate(props) {
  var children = props.children,
      disabled = props.disabled,
      hasToolbar = props.hasToolbar,
      hasMoveDown = props.hasMoveDown,
      hasMoveUp = props.hasMoveUp,
      hasRemove = props.hasRemove,
      index = props.index,
      onDropIndexClick = props.onDropIndexClick,
      onReorderClick = props.onReorderClick,
      readonly = props.readonly,
      registry = props.registry;
  var _registry$templates$B = registry.templates.ButtonTemplates,
      MoveDownButton = _registry$templates$B.MoveDownButton,
      MoveUpButton = _registry$templates$B.MoveUpButton,
      RemoveButton = _registry$templates$B.RemoveButton;
  var btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold"
  };
  return React.createElement("div", null, React.createElement(Row, {
    className: "mb-2  d-flex align-items-center"
  }, React.createElement(Col, {
    xs: "9",
    lg: "9"
  }, children), React.createElement(Col, {
    xs: "3",
    lg: "3",
    className: "py-4"
  }, hasToolbar && React.createElement("div", {
    className: "d-flex flex-row"
  }, (hasMoveUp || hasMoveDown) && React.createElement("div", {
    className: "m-0 p-0"
  }, React.createElement(MoveUpButton, {
    className: "array-item-move-up",
    style: btnStyle,
    disabled: disabled || readonly || !hasMoveUp,
    onClick: onReorderClick(index, index - 1)
  })), (hasMoveUp || hasMoveDown) && React.createElement("div", {
    className: "m-0 p-0"
  }, React.createElement(MoveDownButton, {
    style: btnStyle,
    disabled: disabled || readonly || !hasMoveDown,
    onClick: onReorderClick(index, index + 1)
  })), hasRemove && React.createElement("div", {
    className: "m-0 p-0"
  }, React.createElement(RemoveButton, {
    style: btnStyle,
    disabled: disabled || readonly,
    onClick: onDropIndexClick(index)
  }))))));
};

var _excluded$1 = ["key"];

var ArrayFieldTemplate = function ArrayFieldTemplate(props) {
  var canAdd = props.canAdd,
      disabled = props.disabled,
      idSchema = props.idSchema,
      uiSchema = props.uiSchema,
      items = props.items,
      onAddClick = props.onAddClick,
      readonly = props.readonly,
      registry = props.registry,
      required = props.required,
      schema = props.schema,
      title = props.title;
  var uiOptions = getUiOptions(uiSchema);
  var ArrayFieldDescriptionTemplate = getTemplate("ArrayFieldDescriptionTemplate", registry, uiOptions);
  var ArrayFieldItemTemplate = getTemplate("ArrayFieldItemTemplate", registry, uiOptions);
  var ArrayFieldTitleTemplate = getTemplate("ArrayFieldTitleTemplate", registry, uiOptions); // Button templates are not overridden in the uiSchema

  var AddButton = registry.templates.ButtonTemplates.AddButton;
  return React.createElement("div", null, React.createElement(Row, {
    className: "p-0 m-0"
  }, React.createElement(Col, {
    className: "p-0 m-0"
  }, React.createElement(ArrayFieldTitleTemplate, {
    idSchema: idSchema,
    title: uiOptions.title || title,
    uiSchema: uiSchema,
    required: required,
    registry: registry
  }), (uiOptions.description || schema.description) && React.createElement(ArrayFieldDescriptionTemplate, {
    idSchema: idSchema,
    description: uiOptions.description || schema.description,
    uiSchema: uiSchema,
    registry: registry
  }), React.createElement(Container, {
    fluid: true,
    key: "array-item-list-" + idSchema.$id,
    className: "p-0 m-0"
  }, items && items.map(function (_ref) {
    var key = _ref.key,
        itemProps = _objectWithoutPropertiesLoose(_ref, _excluded$1);

    return React.createElement(ArrayFieldItemTemplate, _extends({
      key: key
    }, itemProps));
  }), canAdd && React.createElement(Container, {
    className: ""
  }, React.createElement(Row, {
    className: "mt-2"
  }, React.createElement(Col, {
    xs: 9
  }), React.createElement(Col, {
    xs: 3,
    className: "py-4 col-lg-3 col-3"
  }, React.createElement(AddButton, {
    className: "array-item-add",
    onClick: onAddClick,
    disabled: disabled || readonly
  }))))))));
};

var BaseInputTemplate = function BaseInputTemplate(_ref) {
  var id = _ref.id,
      placeholder = _ref.placeholder,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      type = _ref.type,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      options = _ref.options,
      schema = _ref.schema,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
      uiSchema = _ref.uiSchema,
      children = _ref.children,
      extraProps = _ref.extraProps;

  var inputProps = _extends({}, extraProps, getInputProps(schema, type, options));

  var uiOptions = getUiOptions(uiSchema);

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  }; // const classNames = [rawErrors.length > 0 ? "is-invalid" : "", type === 'file' ? 'custom-file-label': ""]


  return React.createElement(Form$1.Group, {
    className: "mb-0"
  }, React.createElement(Form$1.Label, {
    htmlFor: id,
    className: rawErrors.length > 0 ? "text-danger" : ""
  }, uiOptions.title || label || schema.title, (label || uiOptions.title) && required ? "*" : null), React.createElement(Form$1.Control, _extends({
    id: id,
    placeholder: placeholder,
    autoFocus: autofocus,
    required: required,
    disabled: disabled,
    readOnly: readonly,
    className: rawErrors.length > 0 ? "is-invalid" : "",
    list: schema.examples ? "examples_" + id : undefined
  }, inputProps, {
    value: value || value === 0 ? value : "",
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  })), children, schema.examples ? React.createElement("datalist", {
    id: "examples_" + id
  }, schema.examples.concat(schema["default"] ? [schema["default"]] : []).map(function (example) {
    return React.createElement("option", {
      key: example,
      value: example
    });
  })) : null);
};

var DescriptionField = function DescriptionField(_ref) {
  var id = _ref.id,
      description = _ref.description;

  if (description) {
    return React.createElement("div", null, React.createElement("div", {
      id: id,
      className: "mb-3"
    }, description));
  }

  return null;
};

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;
  return React.createElement(Card, {
    border: "danger",
    className: "mb-4"
  }, React.createElement(Card.Header, {
    className: "alert-danger"
  }, "Errors"), React.createElement(Card.Body, {
    className: "p-0"
  }, React.createElement(ListGroup, null, errors.map(function (error, i) {
    return React.createElement(ListGroup.Item, {
      key: i,
      className: "border-0"
    }, React.createElement("span", null, error.stack));
  }))));
};

var _excluded = ["icon", "iconType", "className"];

var IconButton = function IconButton(props) {
  var icon = props.icon,
      otherProps = _objectWithoutPropertiesLoose(props, _excluded);

  return React.createElement(Button, _extends({}, otherProps, {
    variant: props.variant || "light",
    size: "sm"
  }), icon);
};
function MoveDownButton(props) {
  return React.createElement(IconButton, _extends({
    title: "Move down"
  }, props, {
    icon: React.createElement(AiOutlineArrowDown, null)
  }));
}
function MoveUpButton(props) {
  return React.createElement(IconButton, _extends({
    title: "Move up"
  }, props, {
    icon: React.createElement(AiOutlineArrowUp, null)
  }));
}
function RemoveButton(props) {
  return React.createElement(IconButton, _extends({
    title: "Remove"
  }, props, {
    variant: "danger",
    icon: React.createElement(IoIosRemove, null)
  }));
}

var WrapIfAdditional = function WrapIfAdditional(_ref) {
  var classNames = _ref.classNames,
      children = _ref.children,
      disabled = _ref.disabled,
      id = _ref.id,
      label = _ref.label,
      onDropPropertyClick = _ref.onDropPropertyClick,
      onKeyChange = _ref.onKeyChange,
      readonly = _ref.readonly,
      required = _ref.required,
      schema = _ref.schema,
      registry = _ref.registry;
  var RemoveButton = registry.templates.ButtonTemplates.RemoveButton;
  var keyLabel = label + " Key"; // i18n ?

  var additional = (ADDITIONAL_PROPERTY_FLAG in schema);

  if (!additional) {
    return React.createElement("div", {
      className: classNames
    }, children);
  }

  var handleBlur = function handleBlur(_ref2) {
    var target = _ref2.target;
    return onKeyChange(target.value);
  };

  var keyId = id + "-key";
  return React.createElement(Row, {
    className: classNames,
    key: keyId
  }, React.createElement(Col, {
    xs: 5
  }, React.createElement(Form$1.Group, null, React.createElement(Form$1.Label, {
    htmlFor: keyId
  }, keyLabel), React.createElement(Form$1.Control, {
    required: required,
    defaultValue: label,
    disabled: disabled || readonly,
    id: keyId,
    name: keyId,
    onBlur: !readonly ? handleBlur : undefined,
    type: "text"
  }))), React.createElement(Col, {
    xs: 5
  }, children), React.createElement(Col, {
    xs: 2,
    className: "py-4"
  }, React.createElement(RemoveButton, {
    iconType: "block",
    className: "w-100",
    disabled: disabled || readonly,
    onClick: onDropPropertyClick(label)
  })));
};

var FieldTemplate = function FieldTemplate(_ref) {
  var id = _ref.id,
      children = _ref.children,
      displayLabel = _ref.displayLabel,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
      rawHelp = _ref.rawHelp,
      rawDescription = _ref.rawDescription,
      classNames = _ref.classNames,
      disabled = _ref.disabled,
      label = _ref.label,
      onDropPropertyClick = _ref.onDropPropertyClick,
      onKeyChange = _ref.onKeyChange,
      readonly = _ref.readonly,
      required = _ref.required,
      schema = _ref.schema,
      registry = _ref.registry;
  return React.createElement(WrapIfAdditional, {
    classNames: classNames,
    disabled: disabled,
    id: id,
    label: label,
    onDropPropertyClick: onDropPropertyClick,
    onKeyChange: onKeyChange,
    readonly: readonly,
    required: required,
    schema: schema,
    registry: registry
  }, React.createElement(Form$1.Group, null, children, displayLabel && rawDescription && React.createElement(Form$1.Text, {
    className: rawErrors.length > 0 ? "text-danger" : "text-muted"
  }, rawDescription), rawErrors.length > 0 && React.createElement(ListGroup, {
    as: "ul"
  }, rawErrors.map(function (error) {
    return React.createElement(ListGroup.Item, {
      as: "li",
      key: error,
      className: "border-0 m-0 p-0"
    }, React.createElement("small", {
      className: "m-0 text-danger"
    }, error));
  })), rawHelp && React.createElement(Form$1.Text, {
    className: rawErrors.length > 0 ? "text-danger" : "text-muted",
    id: id
  }, rawHelp)));
};

var ObjectFieldTemplate = function ObjectFieldTemplate(_ref) {
  var description = _ref.description,
      title = _ref.title,
      properties = _ref.properties,
      required = _ref.required,
      uiSchema = _ref.uiSchema,
      idSchema = _ref.idSchema,
      schema = _ref.schema,
      formData = _ref.formData,
      onAddClick = _ref.onAddClick,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      registry = _ref.registry;
  var uiOptions = getUiOptions(uiSchema);
  var TitleFieldTemplate = getTemplate("TitleFieldTemplate", registry, uiOptions);
  var DescriptionFieldTemplate = getTemplate("DescriptionFieldTemplate", registry, uiOptions); // Button templates are not overridden in the uiSchema

  var AddButton = registry.templates.ButtonTemplates.AddButton;
  return React.createElement(React.Fragment, null, (uiOptions.title || title) && React.createElement(TitleFieldTemplate, {
    id: idSchema.$id + "-title",
    title: uiOptions.title || title,
    required: required,
    registry: registry,
    uiSchema: uiSchema
  }), (uiOptions.description || description) && React.createElement(DescriptionFieldTemplate, {
    id: idSchema.$id + "-description",
    description: uiOptions.description || description,
    registry: registry
  }), React.createElement(Container, {
    fluid: true,
    className: "p-0"
  }, properties.map(function (element, index) {
    return React.createElement(Row, {
      key: index,
      style: {
        marginBottom: "10px"
      },
      className: element.hidden ? "d-none" : undefined
    }, React.createElement(Col, {
      xs: 12
    }, " ", element.content));
  }), canExpand(schema, uiSchema, formData) ? React.createElement(Row, null, React.createElement(Col, {
    xs: {
      offset: 9,
      span: 3
    },
    className: "py-4"
  }, React.createElement(AddButton, {
    onClick: onAddClick(schema),
    disabled: disabled || readonly,
    className: "object-property-expand"
  }))) : null));
};

var SubmitButton = function SubmitButton(props) {
  var _getSubmitButtonOptio = getSubmitButtonOptions(props.uiSchema),
      submitText = _getSubmitButtonOptio.submitText,
      norender = _getSubmitButtonOptio.norender,
      submitButtonProps = _getSubmitButtonOptio.props;

  if (norender) {
    return null;
  }

  return React.createElement("div", null, React.createElement(Button, _extends({
    variant: "primary",
    type: "submit"
  }, submitButtonProps), submitText));
};

var TitleField = function TitleField(_ref) {
  var id = _ref.id,
      title = _ref.title,
      uiSchema = _ref.uiSchema;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    id: id,
    className: "my-1"
  }, React.createElement("h5", null, uiSchema && uiSchema["ui:title"] || title), React.createElement("hr", {
    className: "border-0 bg-secondary",
    style: {
      height: "1px"
    }
  })));
};

var Templates = {
  ArrayFieldItemTemplate: ArrayFieldItemTemplate,
  ArrayFieldTemplate: ArrayFieldTemplate,
  BaseInputTemplate: BaseInputTemplate,
  ButtonTemplates: {
    AddButton: AddButton,
    MoveDownButton: MoveDownButton,
    MoveUpButton: MoveUpButton,
    RemoveButton: RemoveButton,
    SubmitButton: SubmitButton
  },
  DescriptionFieldTemplate: DescriptionField,
  ErrorListTemplate: ErrorList,
  FieldTemplate: FieldTemplate,
  ObjectFieldTemplate: ObjectFieldTemplate,
  TitleFieldTemplate: TitleField
};

var CheckboxWidget = function CheckboxWidget(props) {
  var id = props.id,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      label = props.label,
      schema = props.schema,
      autofocus = props.autofocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus;

  var _onChange = function _onChange(_ref) {
    var checked = _ref.target.checked;
    return onChange(checked);
  };

  var _onBlur = function _onBlur(_ref2) {
    var checked = _ref2.target.checked;
    return onBlur(id, checked);
  };

  var _onFocus = function _onFocus(_ref3) {
    var checked = _ref3.target.checked;
    return onFocus(id, checked);
  };

  var desc = label || schema.description;
  return React.createElement(Form$1.Group, {
    className: "checkbox " + (disabled || readonly ? "disabled" : "")
  }, React.createElement(Form$1.Check, {
    id: id,
    label: desc,
    checked: typeof value === "undefined" ? false : value,
    required: required,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    onChange: _onChange,
    type: "checkbox",
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
};

var selectValue = function selectValue(value, selected, all) {
  var at = all.indexOf(value);
  var updated = selected.slice(0, at).concat(value, selected.slice(at)); // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order

  return updated.sort(function (a, b) {
    return all.indexOf(a) > all.indexOf(b);
  });
};

var deselectValue = function deselectValue(value, selected) {
  return selected.filter(function (v) {
    return v !== value;
  });
};

var CheckboxesWidget = function CheckboxesWidget(_ref) {
  var schema = _ref.schema,
      label = _ref.label,
      id = _ref.id,
      disabled = _ref.disabled,
      options = _ref.options,
      value = _ref.value,
      autofocus = _ref.autofocus,
      readonly = _ref.readonly,
      required = _ref.required,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled,
      inline = options.inline;

  var _onChange = function _onChange(option) {
    return function (_ref2) {
      var checked = _ref2.target.checked;
      var all = enumOptions.map(function (_ref3) {
        var value = _ref3.value;
        return value;
      });

      if (checked) {
        onChange(selectValue(option.value, value, all));
      } else {
        onChange(deselectValue(option.value, value));
      }
    };
  };

  var _onBlur = function _onBlur(_ref4) {
    var value = _ref4.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref5) {
    var value = _ref5.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement(Form$1.Label, {
    htmlFor: id
  }, label || schema.title), React.createElement(Form$1.Group, null, enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) != -1;
    return inline ? React.createElement(Form$1, {
      key: index
    }, React.createElement(Form$1.Check, {
      required: required,
      inline: true,
      className: "bg-transparent border-0",
      checked: checked,
      type: "checkbox",
      id: id + "_" + index,
      label: option.label,
      autoFocus: autofocus && index === 0,
      onChange: _onChange(option),
      onBlur: _onBlur,
      onFocus: _onFocus,
      disabled: disabled || itemDisabled || readonly
    })) : React.createElement(Form$1, {
      key: index
    }, React.createElement(Form$1.Check, {
      required: required,
      checked: checked,
      className: "bg-transparent border-0",
      type: "checkbox",
      id: id + "_" + index,
      label: option.label,
      autoFocus: autofocus && index === 0,
      onChange: _onChange(option),
      onBlur: _onBlur,
      onFocus: _onFocus,
      disabled: disabled || itemDisabled || readonly
    }));
  })));
};

var RadioWidget = function RadioWidget(_ref) {
  var id = _ref.id,
      schema = _ref.schema,
      options = _ref.options,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      label = _ref.label,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      uiSchema = _ref.uiSchema;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;
  var uiOptions = getUiOptions(uiSchema);

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(schema.type == "boolean" ? value !== "false" : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  var inline = Boolean(options && options.inline);
  return React.createElement(Form$1.Group, {
    className: "mb-0"
  }, React.createElement(Form$1.Label, {
    className: "d-block"
  }, uiOptions.title || schema.title || label, (label || uiOptions.title || schema.title) && required ? "*" : null), enumOptions.map(function (option, i) {
    var itemDisabled = Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1;
    var checked = option.value == value;
    var radio = React.createElement(Form$1.Check, {
      inline: inline,
      label: option.label,
      id: option.label,
      key: i,
      name: id,
      type: "radio",
      disabled: disabled || itemDisabled || readonly,
      checked: checked,
      required: required,
      value: option.value,
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus
    });
    return radio;
  }));
};

var RangeWidget = function RangeWidget(props) {
  var value = props.value,
      label = props.label,
      options = props.options,
      registry = props.registry;
  var BaseInputTemplate = getTemplate("BaseInputTemplate", registry, options);
  return React.createElement(BaseInputTemplate, _extends({}, props, {
    extraProps: label
  }), React.createElement("span", {
    className: "range-view"
  }, value));
};

var SelectWidget = function SelectWidget(_ref) {
  var schema = _ref.schema,
      id = _ref.id,
      options = _ref.options,
      label = _ref.label,
      required = _ref.required,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      value = _ref.value,
      multiple = _ref.multiple,
      autofocus = _ref.autofocus,
      _onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;
  var emptyValue = multiple ? [] : "";

  function getValue(event, multiple) {
    if (multiple) {
      return [].slice.call(event.target.options).filter(function (o) {
        return o.selected;
      }).map(function (o) {
        return o.value;
      });
    } else {
      return event.target.value;
    }
  }

  return React.createElement(Form$1.Group, null, React.createElement(Form$1.Label, {
    className: rawErrors.length > 0 ? "text-danger" : "",
    htmlFor: id
  }, label || schema.title, (label || schema.title) && required ? "*" : null), React.createElement(Form$1.Control, {
    as: "select",
    id: id,
    value: typeof value === "undefined" ? emptyValue : value,
    required: required,
    multiple: multiple,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    className: rawErrors.length > 0 ? "is-invalid" : "",
    onBlur: onBlur && function (event) {
      var newValue = getValue(event, multiple);
      onBlur(id, processSelectValue(schema, newValue, options));
    },
    onFocus: onFocus && function (event) {
      var newValue = getValue(event, multiple);
      onFocus(id, processSelectValue(schema, newValue, options));
    },
    onChange: function onChange(event) {
      var newValue = getValue(event, multiple);

      _onChange(processSelectValue(schema, newValue, options));
    }
  }, !multiple && schema["default"] === undefined && React.createElement("option", {
    value: ""
  }, placeholder), enumOptions.map(function (_ref2, i) {
    var value = _ref2.value,
        label = _ref2.label;
    var disabled = Array.isArray(enumDisabled) && enumDisabled.indexOf(value) != -1;
    return React.createElement("option", {
      key: i,
      id: label,
      value: value,
      disabled: disabled
    }, label);
  })));
};

var TextareaWidget = function TextareaWidget(_ref) {
  var id = _ref.id,
      placeholder = _ref.placeholder,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      autofocus = _ref.autofocus,
      label = _ref.label,
      readonly = _ref.readonly,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      options = _ref.options,
      schema = _ref.schema,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
      uiSchema = _ref.uiSchema;
  var uiOptions = getUiOptions(uiSchema);

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === "" ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(React.Fragment, null, React.createElement("label", {
    htmlFor: id
  }, uiOptions.title || schema.title || label, required && React.createElement("span", {
    "aria-hidden": true,
    className: rawErrors.length > 0 ? "text-danger ml-1" : "ml-1"
  }, "\u2009", "*")), React.createElement(InputGroup, null, React.createElement(FormControl, {
    id: id,
    as: "textarea",
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readonly,
    value: value,
    required: required,
    autoFocus: autofocus,
    rows: options.rows || 5,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  })));
};

var FileWidget = function FileWidget(props) {
  var options = props.options,
      registry = props.registry;
  var BaseInputTemplate = getTemplate("BaseInputTemplate", registry, options);
  return React.createElement(BaseInputTemplate, _extends({}, props, {
    type: "file"
  }));
};

var Widgets = {
  CheckboxWidget: CheckboxWidget,
  CheckboxesWidget: CheckboxesWidget,
  RadioWidget: RadioWidget,
  RangeWidget: RangeWidget,
  SelectWidget: SelectWidget,
  TextareaWidget: TextareaWidget,
  FileWidget: FileWidget
};

var Theme = {
  templates: Templates,
  widgets: Widgets
};

var Form = /*#__PURE__*/withTheme(Theme);

export { Form, Templates, Theme, Widgets, Form as default };
//# sourceMappingURL=bootstrap-4.esm.js.map
