const remap = require('../index.js')

describe('converter tests', () => {
  it('can remap bootstrap color values to use CSS variables', () => {
    const remaped = remap('tests/fixtures/bootstrap-v5.0.2.css')
    expect(remaped).toContain(
      // eslint-disable-next-line indent
`:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --body-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  --mark-background-color: #fcf8e3;
  --a-hover-color: #0a58ca;
  --img-thumbnail-border: #dee2e6;
  --table-primary-color: #000;
  --table-primary-border-color: #bacbe6;
  --table-secondary-border-color: #cbccce;
  --table-success-border-color: #bcd0c7;
  --table-info-border-color: #badce3;
  --table-warning-border-color: #e6dbb9;
  --table-danger-border-color: #dfc2c4;
  --table-light-border-color: #dfe0e1;
  --table-dark-border-color: #373b3e;
  --form-control-border: #ced4da;
  --form-control-focus-border-color: #86b7fe;
  --form-control-focus-box-shadow: rgba(13, 110, 253, 0.25);
  --form-control-disabled-background-color: #e9ecef;
  --form-control-hover-background-color: #dde0e3;
  --form-check-input-border: rgba(0, 0, 0, 0.25);
  --active-background-color: #b6d4fe;
  --form-range-disabled-background-color: #adb5bd;
  --valid-tooltip-background-color: rgba(25, 135, 84, 0.9);
  --valid-focus-box-shadow: rgba(25, 135, 84, 0.25);
  --invalid-tooltip-background-color: rgba(220, 53, 69, 0.9);
  --invalid-focus-box-shadow: rgba(220, 53, 69, 0.25);
  --btn-primary-hover-background-color: #0b5ed7;
  --btn-check-focus-box-shadow: rgba(49, 132, 253, 0.5);
  --btn-primary-dropdown-toggle-border-color: #0a53be;
  --btn-secondary-hover-background-color: #5c636a;
  --btn-secondary-hover-border-color: #565e64;
  --btn-secondary-focus-box-shadow: rgba(130, 138, 145, 0.5);
  --btn-secondary-dropdown-toggle-border-color: #51585e;
  --btn-success-hover-background-color: #157347;
  --btn-success-hover-border-color: #146c43;
  --btn-success-focus-box-shadow: rgba(60, 153, 110, 0.5);
  --btn-success-dropdown-toggle-border-color: #13653f;
  --btn-info-hover-background-color: #31d2f2;
  --btn-info-hover-border-color: #25cff2;
  --btn-info-focus-box-shadow: rgba(11, 172, 204, 0.5);
  --btn-info-dropdown-toggle-background-color: #3dd5f3;
  --btn-warning-hover-background-color: #ffca2c;
  --btn-warning-hover-border-color: #ffc720;
  --btn-warning-focus-box-shadow: rgba(217, 164, 6, 0.5);
  --btn-warning-dropdown-toggle-background-color: #ffcd39;
  --btn-danger-hover-background-color: #bb2d3b;
  --btn-danger-hover-border-color: #b02a37;
  --btn-danger-focus-box-shadow: rgba(225, 83, 97, 0.5);
  --btn-danger-dropdown-toggle-border-color: #a52834;
  --btn-light-hover-background-color: #f9fafb;
  --btn-light-focus-box-shadow: rgba(211, 212, 213, 0.5);
  --btn-dark-hover-background-color: #1c1f23;
  --btn-dark-hover-border-color: #1a1e21;
  --btn-dark-focus-box-shadow: rgba(66, 70, 73, 0.5);
  --btn-dark-dropdown-toggle-border-color: #191c1f;
  --btn-outline-primary-focus-box-shadow: rgba(13, 110, 253, 0.5);
  --btn-outline-secondary-focus-box-shadow: rgba(108, 117, 125, 0.5);
  --btn-outline-success-focus-box-shadow: rgba(25, 135, 84, 0.5);
  --btn-outline-info-focus-box-shadow: rgba(13, 202, 240, 0.5);
  --btn-outline-warning-focus-box-shadow: rgba(255, 193, 7, 0.5);
  --btn-outline-danger-focus-box-shadow: rgba(220, 53, 69, 0.5);
  --btn-outline-light-focus-box-shadow: rgba(248, 249, 250, 0.5);
  --btn-outline-dark-focus-box-shadow: rgba(33, 37, 41, 0.5);
  --dropdown-menu-border: rgba(0, 0, 0, 0.15);
  --dropdown-item-hover-color: #1e2125;
  --dropdown-item-hover-background-color: rgba(255, 255, 255, 0.15);
  --nav-link-color: rgba(255, 255, 255, 0.55);
  --navbar-brand-color: rgba(0, 0, 0, 0.9);
  --nav-link-hover-color: rgba(0, 0, 0, 0.7);
  --nav-link-disabled-color: rgba(255, 255, 255, 0.25);
  --navbar-toggler-border-color: rgba(255, 255, 255, 0.1);
  --nav-link-focus-color: rgba(255, 255, 255, 0.75);
  --card-border: rgba(0, 0, 0, 0.125);
  --card-header-background-color: rgba(0, 0, 0, 0.03);
  --accordion-button-not-color: #0c63e4;
  --accordion-button-not-background-color: #e7f1ff;
  --alert-primary-color: #084298;
  --alert-primary-background-color: #cfe2ff;
  --alert-link-color: #101214;
  --alert-secondary-color: #41464b;
  --alert-secondary-background-color: #e2e3e5;
  --alert-secondary-border-color: #d3d6d8;
  --alert-success-color: #0f5132;
  --alert-success-background-color: #d1e7dd;
  --alert-success-border-color: #badbcc;
  --alert-info-color: #055160;
  --alert-info-background-color: #cff4fc;
  --alert-info-border-color: #b6effb;
  --alert-warning-color: #664d03;
  --alert-warning-background-color: #fff3cd;
  --alert-warning-border-color: #ffecb5;
  --alert-danger-color: #842029;
  --alert-danger-background-color: #f8d7da;
  --alert-danger-border-color: #f5c2c7;
  --alert-light-color: #636464;
  --alert-light-background-color: #fefefe;
  --alert-light-border-color: #fdfdfe;
  --alert-dark-color: #141619;
  --alert-dark-background-color: #d3d3d4;
  --alert-dark-border-color: #bcbebf;
  --list-group-item-action-color: #495057;
  --list-group-item-light-list-group-item-action-hover-background-color: #e5e5e5;
  --list-group-item-dark-list-group-item-action-hover-background-color: #bebebf;
  --toast-background-color: rgba(255, 255, 255, 0.85);
  --toast-border: rgba(0, 0, 0, 0.1);
  --toast-header-border-bottom: rgba(0, 0, 0, 0.05);
  --modal-content-border: rgba(0, 0, 0, 0.2);
  --popover-header--before-border-bottom: #f0f0f0;
  --shadow-sm-box-shadow: rgba(0, 0, 0, 0.075);
  --shadow-lg-box-shadow: rgba(0, 0, 0, 0.175);
  --text-black-50-color: rgba(0, 0, 0, 0.5);
  --text-white-50-color: rgba(255, 255, 255, 0.5);
}`)
  })

  it('can remap color values when file does not contain a :root element', () => {
    const remaped = remap('tests/fixtures/from-issue-1.css')
    expect(remaped).toContain(
      // eslint-disable-next-line indent
`:root {
  --navigator-toolbox-background: #323234;
  --navigator-toolbox-color: white;
  --zotero-toolbar-border-bottom: #1d1d1d;
  --label-color: black;
  --input-background: #474749;
  --tag-selector-item-hover-background: #bbcef1;
  --row-hover-background: #7e7e7e;
  --tabs-border: red;
  --tab-not-border-top: #0a84ff;
  --tab-not-border-left: rgba(127, 127, 127, 0.2);
  --tab-color: #eee;
  --tab-hover-background: #e0e8f6;
  --retraction-details-background: #7f0000;
}`)
  })
})