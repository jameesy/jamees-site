module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"8":"07826c4004200ab7be60","9":"f1c4ee4f92dde2a5719f"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "h0NG");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "5Phu":
/***/ (function(module, exports) {

module.exports = require("github-slugger");

/***/ }),

/***/ "7ITC":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "8ubr":
/***/ (function(module, exports) {

module.exports = require("async-sema");

/***/ }),

/***/ "AO39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBlogLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDateStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return postIsReady; });
const getBlogLink = slug => {
  return `/blog/${slug}`;
};
const getDateStr = date => {
  return new Date(date).toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  });
};
const postIsReady = post => {
  return  false || post.Published === 'Yes';
};

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "JGLs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNotionUsers; });
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SZzo");

async function getNotionUsers(ids) {
  const {
    results = []
  } = await Object(_rpc__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('getRecordValues', {
    requests: ids.map(id => ({
      id,
      table: 'notion_user'
    }))
  });
  const users = {};

  for (const result of results) {
    const {
      value
    } = result || {
      value: {}
    };
    const {
      given_name,
      family_name
    } = value;
    let full_name = given_name || '';

    if (family_name) {
      full_name = `${full_name} ${family_name}`;
    }

    users[value.id] = {
      full_name
    };
  }

  return {
    users
  };
}

/***/ }),

/***/ "N4Zu":
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),

/***/ "SZzo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rpc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getError; });
/* unused harmony export getJSONHeaders */
/* unused harmony export getBodyOrNull */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return values; });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4vsW");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lrWJ");


async function rpc(fnName, body) {
  if (!_server_constants__WEBPACK_IMPORTED_MODULE_1__[/* NOTION_TOKEN */ "c"]) {
    throw new Error('NOTION_TOKEN is not set in env');
  }

  const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_server_constants__WEBPACK_IMPORTED_MODULE_1__[/* API_ENDPOINT */ "a"]}/${fnName}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      cookie: `token_v2=${_server_constants__WEBPACK_IMPORTED_MODULE_1__[/* NOTION_TOKEN */ "c"]}`
    },
    body: JSON.stringify(body)
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(await getError(res));
  }
}
async function getError(res) {
  return `Notion API error (${res.status}) \n${getJSONHeaders(res)}\n ${await getBodyOrNull(res)}`;
}
function getJSONHeaders(res) {
  return JSON.stringify(res.headers.raw());
}
function getBodyOrNull(res) {
  try {
    return res.text();
  } catch (err) {
    return null;
  }
}
function values(obj) {
  const vals = [];
  Object.keys(obj).forEach(key => {
    vals.push(obj[key]);
  });
  return vals;
}

/***/ }),

/***/ "ToMw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getBlogIndex; });

// EXTERNAL MODULE: external "async-sema"
var external_async_sema_ = __webpack_require__("8ubr");

// EXTERNAL MODULE: ./src/lib/notion/rpc.ts
var rpc = __webpack_require__("SZzo");

// CONCATENATED MODULE: ./src/lib/notion/queryCollection.ts

function queryCollection({
  collectionId,
  collectionViewId,
  loader = {},
  query = {}
}) {
  const {
    limit = 999,
    // TODO: figure out Notion's way of handling pagination
    loadContentCover = true,
    type = 'table',
    userLocale = 'en',
    userTimeZone = 'America/Phoenix'
  } = loader;
  const {
    aggregate = [{
      aggregation_type: 'count',
      id: 'count',
      property: 'title',
      type: 'title',
      view_type: 'table'
    }],
    filter = [],
    filter_operator = 'and',
    sort = []
  } = query;
  return Object(rpc["a" /* default */])('queryCollection', {
    collectionId,
    collectionViewId,
    loader: {
      limit,
      loadContentCover,
      type,
      userLocale,
      userTimeZone
    },
    query: {
      aggregate,
      filter,
      filter_operator,
      sort
    }
  });
}
// EXTERNAL MODULE: external "github-slugger"
var external_github_slugger_ = __webpack_require__("5Phu");
var external_github_slugger_default = /*#__PURE__*/__webpack_require__.n(external_github_slugger_);

// CONCATENATED MODULE: ./src/lib/notion/getTableData.ts



async function loadTable(collectionBlock, isPosts = false) {
  const slugger = new external_github_slugger_default.a();
  const {
    value
  } = collectionBlock;
  let table = {};
  const col = await queryCollection({
    collectionId: value.collection_id,
    collectionViewId: value.view_ids[0]
  });
  const entries = Object(rpc["c" /* values */])(col.recordMap.block).filter(block => {
    return block.value && block.value.parent_id === value.collection_id;
  });
  const colId = Object.keys(col.recordMap.collection)[0];
  const schema = col.recordMap.collection[colId].value.schema;
  const schemaKeys = Object.keys(schema);

  for (const entry of entries) {
    const props = entry.value && entry.value.properties;
    const row = {};
    if (!props) continue;

    if (entry.value.content) {
      row.id = entry.value.id;
    }

    schemaKeys.forEach(key => {
      // might be undefined
      let val = props[key] && props[key][0][0]; // authors and blocks are centralized

      if (val && props[key][0][1]) {
        const type = props[key][0][1][0];

        switch (type[0]) {
          case 'a':
            // link
            val = type[1];
            break;

          case 'u':
            // user
            val = props[key].filter(arr => arr.length > 1).map(arr => arr[1][0][1]);
            break;

          case 'p':
            // page (block)
            const page = col.recordMap.block[type[1]];
            row.id = page.value.id;
            val = page.value.properties.title[0][0];
            break;

          case 'd':
            // date
            // start_date: 2019-06-18
            // start_time: 07:00
            // time_zone: Europe/Berlin, America/Los_Angeles
            if (!type[1].start_date) {
              break;
            } // initial with provided date


            const providedDate = new Date(type[1].start_date + ' ' + (type[1].start_time || '')).getTime(); // calculate offset from provided time zone

            const timezoneOffset = new Date(new Date().toLocaleString('en-US', {
              timeZone: type[1].time_zone
            })).getTime() - new Date().getTime(); // initialize subtracting time zone offset

            val = new Date(providedDate - timezoneOffset).getTime();
            break;

          default:
            console.error('unknown type', type[0], type);
            break;
        }
      }

      if (typeof val === 'string') {
        val = val.trim();
      }

      row[schema[key].name] = val || null;
    }); // auto-generate slug from title

    row.Slug = row.Slug || slugger.slug(row.Page || '');
    const key = row.Slug;
    if (isPosts && !key) continue;

    if (key) {
      table[key] = row;
    } else {
      if (!Array.isArray(table)) table = [];
      table.push(row);
    }
  }

  return table;
}
// EXTERNAL MODULE: ./src/lib/notion/getPageData.ts
var getPageData = __webpack_require__("faLw");

// CONCATENATED MODULE: ./src/lib/notion/getPostPreview.ts


const nonPreviewTypes = new Set(['editor', 'page', 'collection_view']);
async function getPostPreview(pageId) {
  let blocks;
  let dividerIndex = 0;
  const data = await Object(getPageData["b" /* loadPageChunk */])({
    pageId,
    limit: 10
  });
  blocks = Object(rpc["c" /* values */])(data.recordMap.block);

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].value.type === 'divider') {
      dividerIndex = i;
      break;
    }
  }

  blocks = blocks.splice(0, dividerIndex).filter(({
    value: {
      type,
      properties
    }
  }) => !nonPreviewTypes.has(type) && properties).map(block => block.value.properties.title);
  return blocks;
}
// EXTERNAL MODULE: ./src/lib/notion/server-constants.ts
var server_constants = __webpack_require__("lrWJ");

// CONCATENATED MODULE: ./src/lib/notion/getBlogIndex.ts





async function getBlogIndex(previews = true) {
  let postsTable = null;

  if (!postsTable) {
    try {
      const data = await Object(rpc["a" /* default */])('loadPageChunk', {
        pageId: server_constants["b" /* BLOG_INDEX_ID */],
        limit: 999,
        // TODO: figure out Notion's way of handling pagination
        cursor: {
          stack: []
        },
        chunkNumber: 0,
        verticalColumns: false
      }); // Parse table with posts

      const tableBlock = Object(rpc["c" /* values */])(data.recordMap.block).find(block => block.value.type === 'collection_view');
      postsTable = await loadTable(tableBlock, true);
    } catch (err) {
      console.error(`\nFailed to load Notion posts, did you configure your Notion table as an inline table according to https://github.com/ijjk/notion-blog#creating-your-pages-table\n`);
      console.error(err);
      postsTable = {};
    } // only get 10 most recent post's previews


    const postsKeys = Object.keys(postsTable).splice(0, 10);
    const sema = new external_async_sema_["Sema"](3, {
      capacity: postsKeys.length
    });

    if (previews) {
      await Promise.all(postsKeys.sort((a, b) => {
        const postA = postsTable[a];
        const postB = postsTable[b];
        const timeA = postA.Date;
        const timeB = postB.Date;
        return Math.sign(timeB - timeA);
      }).map(async postKey => {
        await sema.acquire();
        const post = postsTable[postKey];
        post.preview = post.id ? await getPostPreview(postsTable[postKey].id) : [];
        sema.release();
      }));
    }
  }

  return postsTable;
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eDmn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* harmony default export */ __webpack_exports__["a"] = (props => __jsx("a", _extends({}, props, {
  rel: "noopener",
  target: props.target || '_blank'
})));

/***/ }),

/***/ "faLw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadPageChunk; });
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SZzo");

const PAGE_LIMIT = 100;
async function getPageData(pageId, skip = 3) {
  try {
    let blocks = [];
    let chunkNumber = 0;
    let currentPage;
    let currentCursor = {
      stack: []
    };

    do {
      // hit page limit, load next page
      const nextBlock = await loadPageChunk({
        pageId,
        cursor: currentCursor,
        chunkNumber
      });
      currentPage = Object(_rpc__WEBPACK_IMPORTED_MODULE_0__[/* values */ "c"])(nextBlock.recordMap.block);
      currentCursor = {
        stack: [nextBlock.cursor.stack[0]]
      };
      chunkNumber++;

      if (currentPage[0] && currentPage[0].value.content) {
        // remove table blocks
        currentPage.splice(0, skip);
      }

      blocks = blocks.concat(currentPage);
    } while (currentPage.length >= PAGE_LIMIT);

    return {
      blocks
    };
  } catch (err) {
    console.error(`Failed to load pageData for ${pageId}`, err);
    return {
      blocks: []
    };
  }
}
function loadPageChunk({
  pageId,
  limit = PAGE_LIMIT,
  cursor = {
    stack: []
  },
  chunkNumber = 0,
  verticalColumns = false
}) {
  return Object(_rpc__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('loadPageChunk', {
    pageId,
    limit,
    cursor,
    chunkNumber,
    verticalColumns
  });
}

/***/ }),

/***/ "h0NG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__("oyvS");

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__("mw/K");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__("jK02");

// CONCATENATED MODULE: ./src/lib/fs-helpers.ts


const readFile = Object(external_util_["promisify"])(external_fs_default.a.readFile);
const writeFile = Object(external_util_["promisify"])(external_fs_default.a.writeFile);
// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__("7ITC");

// EXTERNAL MODULE: ./src/lib/notion/renderers.ts
var renderers = __webpack_require__("sJtj");

// EXTERNAL MODULE: ./src/lib/notion/getBlogIndex.ts + 3 modules
var getBlogIndex = __webpack_require__("ToMw");

// EXTERNAL MODULE: ./src/lib/notion/getNotionUsers.ts
var getNotionUsers = __webpack_require__("JGLs");

// EXTERNAL MODULE: ./src/lib/blog-helpers.ts
var blog_helpers = __webpack_require__("AO39");

// CONCATENATED MODULE: ./src/lib/build-rss.ts






 // must use weird syntax to bypass auto replacing of NODE_ENV

process.env['NODE' + '_ENV'] = 'production'; // constants

const NOW = new Date().toJSON();

function mapToAuthor(author) {
  return `<author><name>${author.full_name}</name></author>`;
}

function decode(string) {
  return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function mapToEntry(post) {
  return `
    <entry>
      <id>${post.link}</id>
      <title>${decode(post.title)}</title>
      <link href="${post.link}"/>
      <updated>${new Date(post.date).toJSON()}</updated>
      <content type="xhtml">
        <div xmlns="http://www.w3.org/1999/xhtml">
          ${Object(server_["renderToStaticMarkup"])(post.preview ? (post.preview || []).map((block, idx) => Object(renderers["a" /* textBlock */])(block, false, post.title + idx)) : post.content)}
          <p class="more">
            <a href="${post.link}">Read more</a>
          </p>
        </div>
      </content>
      ${(post.authors || []).map(mapToAuthor).join('\n      ')}
    </entry>`;
}

function concat(total, item) {
  return total + item;
}

function createRSS(blogPosts = []) {
  const postsString = blogPosts.map(mapToEntry).reduce(concat, '');
  return `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>My Blog</title>
    <subtitle>Blog</subtitle>
    <link href="/atom" rel="self" type="application/rss+xml"/>
    <link href="/" />
    <updated>${NOW}</updated>
    <id>My Notion Blog</id>${postsString}
  </feed>`;
}

async function main() {
  const postsTable = await Object(getBlogIndex["a" /* default */])(true);
  const neededAuthors = new Set();
  const blogPosts = Object.keys(postsTable).map(slug => {
    const post = postsTable[slug];
    if (!Object(blog_helpers["c" /* postIsReady */])(post)) return;
    post.authors = post.Authors || [];

    for (const author of post.authors) {
      neededAuthors.add(author);
    }

    return post;
  }).filter(Boolean);
  const {
    users
  } = await Object(getNotionUsers["a" /* default */])([...neededAuthors]);
  blogPosts.forEach(post => {
    post.authors = post.authors.map(id => users[id]);
    post.link = Object(blog_helpers["a" /* getBlogLink */])(post.Slug);
    post.title = post.Page;
    post.date = post.Date;
  });
  const outputPath = './public/atom';
  await writeFile(Object(external_path_["resolve"])(outputPath), createRSS(blogPosts));
  console.log(`Atom feed file generated at \`${outputPath}\``);
}

main().catch(error => console.error(error));

/***/ }),

/***/ "h0OK":
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-jsx");

/***/ }),

/***/ "jK02":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "lrWJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NOTION_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BLOG_INDEX_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_ENDPOINT; });
/* unused harmony export BLOG_INDEX_CACHE */
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);


const normalizeId = id => {
  if (id.length === 36) return id;

  if (id.length !== 32) {
    throw new Error(`Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`);
  }

  return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(16, 4)}-${id.substr(20)}`;
};

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const BLOG_INDEX_ID = normalizeId(process.env.BLOG_INDEX_ID);
const API_ENDPOINT = 'https://www.notion.so/api/v3';
const BLOG_INDEX_CACHE = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('.blog_index_data');

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sJtj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return textBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tjHo");



function applyTags(tags = [], children, noPTag = false, key) {
  let child = children;

  for (const tag of tags) {
    const props = {
      key
    };
    let tagName = tag[0];
    if (noPTag && tagName === 'p') tagName = react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;
    if (tagName === 'c') tagName = 'code';

    if (tagName === 'a') {
      props.href = tag[1];
    }

    child = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dynamic__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"][tagName] || tagName, props, child);
  }

  return child;
}

const CJKTester = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/g;
function textBlock(text = [], noPTag = false, mainKey) {
  var _text$toString$match;

  const children = [];
  let key = 0;

  for (const textItem of text) {
    key++;

    if (textItem.length === 1) {
      children.push(textItem);
      continue;
    }

    children.push(applyTags(textItem[1], textItem[0], noPTag, key));
  }

  const includesCJKV = Number((_text$toString$match = text.toString().match(CJKTester)) === null || _text$toString$match === void 0 ? void 0 : _text$toString$match.length) > 5;
  const props = {
    key: mainKey
  };

  if (includesCJKV && !noPTag) {
    props.className = 'zh-han';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(noPTag ? react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment : _components_dynamic__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].p, props, ...children, noPTag);
}

/***/ }),

/***/ "tjHo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ext_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eDmn");


/* harmony default export */ __webpack_exports__["a"] = ({
  // default tags
  ol: 'ol',
  ul: 'ul',
  li: 'li',
  p: 'p',
  blockquote: 'blockquote',
  a: _ext_link__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  Code: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, "F1I5")), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/("F1I5")],
      modules: ['./code']
    }
  }),
  Counter: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, "HY/B")), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/("HY/B")],
      modules: ['./counter']
    }
  })
});

/***/ })

/******/ });