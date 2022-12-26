var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var API_KEY = "4d8ee139f9b64f2e68e42e8254d559f1";
var artistList = document.body.querySelector(".artists");
var albumsList = document.body.querySelector(".albums");
var tracksList = document.body.querySelector(".tracks");
var search = document.querySelector(".search");
var searchTitle = document.body.querySelector(".search_title");
var titles = document.body.querySelectorAll(".search_title");
var moreLinks = document.body.querySelectorAll(".more_link");
/** GET запрос к lastFm Api на поиск и получение артистов
 *  @param {string} value - значение поисковой строки
 */
function fetchArtists(value) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=".concat(value, "&api_key=4d8ee139f9b64f2e68e42e8254d559f1&limit=8&format=json"))
                        .then(function (res) { return res.json(); })
                        .then(function (data) { return data.results.artistmatches; })
                        .then(function (artist) {
                        return artist.artist
                            .sort(function (a, b) {
                            return a.listeners - b.listeners;
                        })
                            .forEach(function (data) { return pushToArtists(data); });
                    })["catch"](function (err) { return alert("Не получилось загрузить исполнителей:\n" + err); })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/** GET запрос к lastFm Api на поиск и получение альбомов
 *  @param {string} value - значение поисковой строки
 */
function fetchAlbums(value) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://ws.audioscrobbler.com/2.0/?method=album.search&album=".concat(value, "&api_key=4d8ee139f9b64f2e68e42e8254d559f1&limit=8&format=json"))
                        .then(function (res) { return res.json(); })
                        .then(function (data) { return data.results.albummatches; })
                        .then(function (album) { return album.album.forEach(function (data) { return pushToAlbums(data); }); })["catch"](function (err) { return alert("Не получилось загрузить альбомы:\n" + err); })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/** GET запрос к lastFm Api на поиск и получение треков
 *  @param {string} value - значение поисковой строки
 */
function fetchTracks(value) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://ws.audioscrobbler.com/2.0/?method=track.search&track=".concat(value, "&api_key=4d8ee139f9b64f2e68e42e8254d559f1&limit=10&format=json"))
                        .then(function (res) { return res.json(); })
                        .then(function (data) { return data.results.trackmatches; })
                        .then(function (track) {
                        return track.track
                            .sort(function (a, b) {
                            return a.listeners - b.listeners;
                        })
                            .forEach(function (data) { return pushToTracks(data); });
                    })["catch"](function (err) { return alert("Не получилось загрузить треки:\n" + err); })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/** Создание карточки с исполнителем
 *  @param {JSON} data - Json-объект с данными об исполнителе
 */
function pushToArtists(data) {
    var template = "\n<div class=\"artist_card\">\n<img\n  src=".concat(getImg(data.image[3]["#text"]), "\n  alt=\"artist\"\n  width=\"250\"\n  height=\"250\"\n/>\n<div class=\"artist_text\">\n  <span class=\"name\">").concat(data.name, "</span>\n  <span class=\"listeners\">").concat(data.listeners, " listeners</span>\n</div>\n</div>");
    artistList === null || artistList === void 0 ? void 0 : artistList.insertAdjacentHTML("afterbegin", template);
}
/** Создание карточки с альбомом
 *  @param {JSON} data - Json-объект с данными об альбоме
 */
function pushToAlbums(data) {
    var template = "<div class=\"artist_card\">\n  <img\n    src=".concat(getImg(data.image[3]["#text"]), "\n    alt=\"album\"\n    width=\"250\"\n    height=\"250\"\n  />\n  <div class=\"artist_text\">\n    <span class=\"name\">").concat(data.name, "</span>\n    <span class=\"listeners\">").concat(data.artist, "</span>\n  </div>\n</div>");
    albumsList === null || albumsList === void 0 ? void 0 : albumsList.insertAdjacentHTML("afterbegin", template);
}
/** Создание карточки с треком
 *  @param {JSON} data - Json-объект с данными о треке
 */
function pushToTracks(data) {
    var template = " <div class=\"track\">\n    <button class=\"clear_btn\"><img src=\"icons/play.svg\" alt=\"play\" width=\"50\" height=\"50\"/></button>\n    <img\n      src=".concat(getImg(data.image[3]["#text"]), "\n      width=\"50\"\n      height=\"50\"\n      alt=\"track\"\n    />\n    <a href=\"\" class=\"h_link\">\n      <img src=\"icons/heart.svg\"  alt=\"\" width=\"25\" height=\"25\">\n    </a>\n    <span class=\"song\">").concat(data.name, "</span>\n    <span class=\"singer\">").concat(data.artist, "</span>\n    <span class=\"duration\">listeners: ").concat(data.listeners, "</span>\n  </div>");
    tracksList === null || tracksList === void 0 ? void 0 : tracksList.insertAdjacentHTML("afterbegin", template);
}
search === null || search === void 0 ? void 0 : search.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        var target = e.target;
        if (target.value.toString() === "") {
            hideAll();
        }
        else {
            deleteOldCards();
            fetchAlbums(target.value.toString());
            fetchArtists(target.value.toString());
            fetchTracks(target.value.toString());
            showAll();
        }
        if (searchTitle)
            searchTitle.innerHTML = "Search results for: \"".concat(target.value.toString(), "\"");
    }
});
/** Прячем заголовки, если результатов поиска нет*/
function hideAll() {
    titles.forEach(function (title) {
        title.classList.add("hide");
    });
    moreLinks.forEach(function (link) {
        link.classList.add("hide");
    });
    albumsList === null || albumsList === void 0 ? void 0 : albumsList.classList.add("hide");
    artistList === null || artistList === void 0 ? void 0 : artistList.classList.add("hide");
    tracksList === null || tracksList === void 0 ? void 0 : tracksList.classList.add("hide");
}
/** Отображаем заголовки, если результаты поиска отображены */
function showAll() {
    titles.forEach(function (title) {
        title.classList.remove("hide");
    });
    moreLinks.forEach(function (link) {
        link.classList.remove("hide");
    });
    albumsList === null || albumsList === void 0 ? void 0 : albumsList.classList.remove("hide");
    artistList === null || artistList === void 0 ? void 0 : artistList.classList.remove("hide");
    tracksList === null || tracksList === void 0 ? void 0 : tracksList.classList.remove("hide");
}
/** Чистим контейнеры карточек  */
function deleteOldCards() {
    var artstCards = document.body.querySelectorAll(".artist_card");
    artstCards.forEach(function (card) {
        var _a;
        (_a = card.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(card);
    });
    var trackCards = document.body.querySelectorAll(".track");
    trackCards.forEach(function (card) {
        var _a;
        (_a = card.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(card);
    });
}
/** Возвращает обложку, если ее нет
 *  @param {string} data - url обложки
 */
function getImg(data) {
    if (data == "") {
        return "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png";
    }
    else
        return data;
}
