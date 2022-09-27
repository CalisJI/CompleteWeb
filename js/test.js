(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3413],
  {
    9242: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/devcard",
        function () {
          return n(9926);
        },
      ]);
    },
    6600: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return s;
        },
      });
      var i = n(6042),
        r = n(9396),
        a = n(7997),
        o = (n(1720), n(1163)),
        l = n(8790);
      t.Z = l.Z;
      var s = function (e, t, n) {
        var s = (0, o.useRouter)();
        return (0, a.tZ)(
          l.Z,
          (0, r.Z)((0, i.Z)({}, n), {
            activePage: null === s || void 0 === s ? void 0 : s.asPath,
            children: e,
          })
        );
      };
    },
    9926: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return V;
          },
        });
      var i = n(7568),
        r = n(6042),
        a = n(9396),
        o = n(828),
        l = n(4051),
        s = n.n(l),
        c = n(7997),
        h = n(1720),
        d = n(9095),
        p = n(9059),
        u = n(6219),
        g = n(7723),
        m = n(872),
        v = n(3377);
      function f(e) {
        var t = (0, m.Z)({}, e);
        return (0, c.tZ)("div", {
          className: "flex absolute inset-0 bg-overlay-secondary-white",
          children: (0, c.tZ)(
            v.a,
            (0, r.Z)({ className: "m-auto w-6 h-6" }, t)
          ),
        });
      }
      var w = n(7706),
        b = n(8635),
        y = n(8687),
        x = n.n(y),
        E = n(8767),
        Z = n(5514),
        A = n(4184),
        P = n.n(A),
        C = n(3686),
        _ = n(6624);
      const k = (e, t, n, i) => {
          e.style.transition = `${t} ${n}ms ${i}`;
        },
        M = (e, t, n) => Math.min(Math.max(e, t), n);
      class L {
        constructor(e, t) {
          (this.glareAngle = 0),
            (this.glareOpacity = 0),
            (this.calculateGlareSize = (e) => {
              const { width: t, height: n } = e,
                i = Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2));
              return { width: i, height: i };
            }),
            (this.setSize = (e) => {
              const t = this.calculateGlareSize(e);
              (this.glareEl.style.width = `${t.width}px`),
                (this.glareEl.style.height = `${t.height}px`);
            }),
            (this.update = (e, t, n, i) => {
              this.updateAngle(e, t.glareReverse),
                this.updateOpacity(e, t, n, i);
            }),
            (this.updateAngle = (e, t) => {
              const { xPercentage: n, yPercentage: i } = e,
                r = 180 / Math.PI,
                a = n ? Math.atan2(i, -n) * r : 0;
              this.glareAngle = a - (t ? 180 : 0);
            }),
            (this.updateOpacity = (e, t, n, i) => {
              const { xPercentage: r, yPercentage: a } = e,
                { glarePosition: o, glareReverse: l, glareMaxOpacity: s } = t,
                c = n ? -1 : 1,
                h = i ? -1 : 1,
                d = l ? -1 : 1;
              let p = 0;
              switch (o) {
                case "top":
                  p = -r * c * d;
                  break;
                case "right":
                  p = a * h * d;
                  break;
                case "bottom":
                case void 0:
                  p = r * c * d;
                  break;
                case "left":
                  p = -a * h * d;
                  break;
                case "all":
                  p = Math.hypot(r, a);
              }
              const u = M(p, 0, 100);
              this.glareOpacity = (u * s) / 100;
            }),
            (this.render = (e) => {
              const { glareColor: t } = e;
              (this.glareEl.style.transform = `rotate(${this.glareAngle}deg) translate(-50%, -50%)`),
                (this.glareEl.style.opacity = this.glareOpacity.toString()),
                (this.glareEl.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`);
            }),
            (this.glareWrapperEl = document.createElement("div")),
            (this.glareEl = document.createElement("div")),
            this.glareWrapperEl.appendChild(this.glareEl),
            (this.glareWrapperEl.className = "glare-wrapper"),
            (this.glareEl.className = "glare");
          const n = {
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: t,
              WebkitMaskImage: "-webkit-radial-gradient(white, black)",
              pointerEvents: "none",
            },
            i = this.calculateGlareSize(e),
            r = {
              position: "absolute",
              top: "50%",
              left: "50%",
              transformOrigin: "0% 0%",
              pointerEvents: "none",
              width: `${i.width}px`,
              height: `${i.height}px`,
            };
          Object.assign(this.glareWrapperEl.style, n),
            Object.assign(this.glareEl.style, r);
        }
      }
      class z {
        constructor() {
          (this.glareAngle = 0),
            (this.glareOpacity = 0),
            (this.tiltAngleX = 0),
            (this.tiltAngleY = 0),
            (this.tiltAngleXPercentage = 0),
            (this.tiltAngleYPercentage = 0),
            (this.update = (e, t) => {
              this.updateTilt(e, t),
                this.updateTiltManualInput(e, t),
                this.updateTiltReverse(t),
                this.updateTiltLimits(t);
            }),
            (this.updateTilt = (e, t) => {
              const { xPercentage: n, yPercentage: i } = e,
                { tiltMaxAngleX: r, tiltMaxAngleY: a } = t;
              (this.tiltAngleX = (n * r) / 100),
                (this.tiltAngleY = ((i * a) / 100) * -1);
            }),
            (this.updateTiltManualInput = (e, t) => {
              const {
                tiltAngleXManual: n,
                tiltAngleYManual: i,
                tiltMaxAngleX: r,
                tiltMaxAngleY: a,
              } = t;
              (null !== n || null !== i) &&
                ((this.tiltAngleX = null !== n ? n : 0),
                (this.tiltAngleY = null !== i ? i : 0),
                (e.xPercentage = (100 * this.tiltAngleX) / r),
                (e.yPercentage = (100 * this.tiltAngleY) / a));
            }),
            (this.updateTiltReverse = (e) => {
              const t = e.tiltReverse ? -1 : 1;
              (this.tiltAngleX = t * this.tiltAngleX),
                (this.tiltAngleY = t * this.tiltAngleY);
            }),
            (this.updateTiltLimits = (e) => {
              const { tiltAxis: t } = e;
              (this.tiltAngleX = M(this.tiltAngleX, -90, 90)),
                (this.tiltAngleY = M(this.tiltAngleY, -90, 90)),
                t &&
                  ((this.tiltAngleX = "x" === t ? this.tiltAngleX : 0),
                  (this.tiltAngleY = "y" === t ? this.tiltAngleY : 0));
            }),
            (this.updateTiltAnglesPercentage = (e) => {
              const { tiltMaxAngleX: t, tiltMaxAngleY: n } = e;
              (this.tiltAngleXPercentage = (this.tiltAngleX / t) * 100),
                (this.tiltAngleYPercentage = (this.tiltAngleY / n) * 100);
            }),
            (this.render = (e) => {
              e.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `;
            });
        }
      }
      const N = Object.assign(
        Object.assign(
          {
            scale: 1,
            perspective: 1e3,
            flipVertically: !1,
            flipHorizontally: !1,
            reset: !0,
            transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
            transitionSpeed: 400,
            trackOnWindow: !1,
            gyroscope: !1,
          },
          {
            tiltEnable: !0,
            tiltReverse: !1,
            tiltAngleXInitial: 0,
            tiltAngleYInitial: 0,
            tiltMaxAngleX: 20,
            tiltMaxAngleY: 20,
            tiltAxis: void 0,
            tiltAngleXManual: null,
            tiltAngleYManual: null,
          }
        ),
        {
          glareEnable: !1,
          glareMaxOpacity: 0.7,
          glareColor: "#ffffff",
          glarePosition: "bottom",
          glareReverse: !1,
          glareBorderRadius: "0",
        }
      );
      class X extends h.PureComponent {
        constructor() {
          super(...arguments),
            (this.wrapperEl = {
              node: null,
              size: { width: 0, height: 0, left: 0, top: 0 },
              clientPosition: {
                x: null,
                y: null,
                xPercentage: 0,
                yPercentage: 0,
              },
              updateAnimationId: null,
              scale: 1,
            }),
            (this.tilt = null),
            (this.glare = null),
            (this.addDeviceOrientationEventListener = () =>
              (function (e, t, n, i) {
                return new (n || (n = Promise))(function (r, a) {
                  function o(e) {
                    try {
                      s(i.next(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function l(e) {
                    try {
                      s(i.throw(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function s(e) {
                    var t;
                    e.done
                      ? r(e.value)
                      : ((t = e.value),
                        t instanceof n
                          ? t
                          : new n(function (e) {
                              e(t);
                            })).then(o, l);
                  }
                  s((i = i.apply(e, t || [])).next());
                });
              })(this, void 0, void 0, function* () {
                if (
                  (window.DeviceOrientationEvent,
                  "function" == typeof DeviceOrientationEvent.requestPermission)
                )
                  try {
                    return void (
                      "granted" ===
                        (yield DeviceOrientationEvent.requestPermission()) &&
                      window.addEventListener("deviceorientation", this.onMove)
                    );
                  } catch (e) {
                    return void console.error(e);
                  }
                window.addEventListener("deviceorientation", this.onMove);
              })),
            (this.setSize = () => {
              this.setWrapperElSize(),
                this.glare && this.glare.setSize(this.wrapperEl.size);
            }),
            (this.mainLoop = (e) => {
              null !== this.wrapperEl.updateAnimationId &&
                cancelAnimationFrame(this.wrapperEl.updateAnimationId),
                this.processInput(e),
                this.update(e.type),
                (this.wrapperEl.updateAnimationId = requestAnimationFrame(
                  this.renderFrame
                ));
            }),
            (this.onEnter = (e) => {
              const { onEnter: t } = this.props;
              this.setSize(),
                (this.wrapperEl.node.style.willChange = "transform"),
                this.setTransitions(),
                t && t(e.type);
            }),
            (this.onMove = (e) => {
              this.mainLoop(e), this.emitOnMove(e);
            }),
            (this.onLeave = (e) => {
              const { onLeave: t } = this.props;
              if ((this.setTransitions(), t && t(e.type), this.props.reset)) {
                const e = new CustomEvent("autoreset");
                this.onMove(e);
              }
            }),
            (this.processInput = (e) => {
              const { scale: t } = this.props;
              switch (e.type) {
                case "mousemove":
                  (this.wrapperEl.clientPosition.x = e.pageX),
                    (this.wrapperEl.clientPosition.y = e.pageY),
                    (this.wrapperEl.scale = t);
                  break;
                case "touchmove":
                  (this.wrapperEl.clientPosition.x = e.touches[0].pageX),
                    (this.wrapperEl.clientPosition.y = e.touches[0].pageY),
                    (this.wrapperEl.scale = t);
                  break;
                case "deviceorientation":
                  this.processInputDeviceOrientation(e),
                    (this.wrapperEl.scale = t);
                  break;
                case "autoreset":
                  const {
                      tiltAngleXInitial: n,
                      tiltAngleYInitial: i,
                      tiltMaxAngleX: r,
                      tiltMaxAngleY: a,
                    } = this.props,
                    o = (i / a) * 100;
                  (this.wrapperEl.clientPosition.xPercentage = M(
                    (n / r) * 100,
                    -100,
                    100
                  )),
                    (this.wrapperEl.clientPosition.yPercentage = M(
                      o,
                      -100,
                      100
                    )),
                    (this.wrapperEl.scale = 1);
              }
            }),
            (this.processInputDeviceOrientation = (e) => {
              if (!e.gamma || !e.beta || !this.props.gyroscope) return;
              const { tiltMaxAngleX: t, tiltMaxAngleY: n } = this.props,
                i = e.gamma;
              (this.wrapperEl.clientPosition.xPercentage = (e.beta / t) * 100),
                (this.wrapperEl.clientPosition.yPercentage = (i / n) * 100),
                (this.wrapperEl.clientPosition.xPercentage = M(
                  this.wrapperEl.clientPosition.xPercentage,
                  -100,
                  100
                )),
                (this.wrapperEl.clientPosition.yPercentage = M(
                  this.wrapperEl.clientPosition.yPercentage,
                  -100,
                  100
                ));
            }),
            (this.update = (e) => {
              const {
                tiltEnable: t,
                flipVertically: n,
                flipHorizontally: i,
              } = this.props;
              "autoreset" !== e &&
                "deviceorientation" !== e &&
                "propChange" !== e &&
                this.updateClientInput(),
                t &&
                  this.tilt.update(this.wrapperEl.clientPosition, this.props),
                this.updateFlip(),
                this.tilt.updateTiltAnglesPercentage(this.props),
                this.glare &&
                  this.glare.update(
                    this.wrapperEl.clientPosition,
                    this.props,
                    n,
                    i
                  );
            }),
            (this.updateClientInput = () => {
              const { trackOnWindow: e } = this.props;
              let t, n;
              if (e) {
                const { x: e, y: i } = this.wrapperEl.clientPosition;
                (t = (i / window.innerHeight) * 200 - 100),
                  (n = (e / window.innerWidth) * 200 - 100);
              } else {
                const {
                  size: { width: e, height: i, left: r, top: a },
                  clientPosition: { x: o, y: l },
                } = this.wrapperEl;
                (t = ((l - a) / i) * 200 - 100),
                  (n = ((o - r) / e) * 200 - 100);
              }
              (this.wrapperEl.clientPosition.xPercentage = M(t, -100, 100)),
                (this.wrapperEl.clientPosition.yPercentage = M(n, -100, 100));
            }),
            (this.updateFlip = () => {
              const { flipVertically: e, flipHorizontally: t } = this.props;
              e &&
                ((this.tilt.tiltAngleX += 180), (this.tilt.tiltAngleY *= -1)),
                t && (this.tilt.tiltAngleY += 180);
            }),
            (this.renderFrame = () => {
              this.resetWrapperElTransform(),
                this.renderPerspective(),
                this.tilt.render(this.wrapperEl.node),
                this.renderScale(),
                this.glare && this.glare.render(this.props);
            });
        }
        componentDidMount() {
          (this.tilt = new z()), this.initGlare(), this.addEventListeners();
          const e = new CustomEvent("autoreset");
          this.mainLoop(e);
          const t = new CustomEvent("initial");
          this.emitOnMove(t);
        }
        componentWillUnmount() {
          null !== this.wrapperEl.updateAnimationId &&
            cancelAnimationFrame(this.wrapperEl.updateAnimationId),
            this.removeEventListeners();
        }
        componentDidUpdate() {
          const e = new CustomEvent("propChange");
          this.mainLoop(e), this.emitOnMove(e);
        }
        addEventListeners() {
          const { trackOnWindow: e, gyroscope: t } = this.props;
          window.addEventListener("resize", this.setSize),
            e &&
              (window.addEventListener("mouseenter", this.onEnter),
              window.addEventListener("mousemove", this.onMove),
              window.addEventListener("mouseout", this.onLeave),
              window.addEventListener("touchstart", this.onEnter),
              window.addEventListener("touchmove", this.onMove),
              window.addEventListener("touchend", this.onLeave)),
            t && this.addDeviceOrientationEventListener();
        }
        removeEventListeners() {
          const { trackOnWindow: e, gyroscope: t } = this.props;
          window.removeEventListener("resize", this.setSize),
            e &&
              (window.removeEventListener("mouseenter", this.onEnter),
              window.removeEventListener("mousemove", this.onMove),
              window.removeEventListener("mouseout", this.onLeave),
              window.removeEventListener("touchstart", this.onEnter),
              window.removeEventListener("touchmove", this.onMove),
              window.removeEventListener("touchend", this.onLeave)),
            t &&
              window.DeviceOrientationEvent &&
              window.removeEventListener("deviceorientation", this.onMove);
        }
        setWrapperElSize() {
          const e = this.wrapperEl.node.getBoundingClientRect();
          (this.wrapperEl.size.width = this.wrapperEl.node.offsetWidth),
            (this.wrapperEl.size.height = this.wrapperEl.node.offsetHeight),
            (this.wrapperEl.size.left = e.left + window.scrollX),
            (this.wrapperEl.size.top = e.top + window.scrollY);
        }
        initGlare() {
          const { glareEnable: e, glareBorderRadius: t } = this.props;
          e &&
            ((this.glare = new L(this.wrapperEl.size, t)),
            this.wrapperEl.node.appendChild(this.glare.glareWrapperEl));
        }
        emitOnMove(e) {
          const { onMove: t } = this.props;
          if (!t) return;
          let n = 0,
            i = 0;
          this.glare &&
            ((n = this.glare.glareAngle), (i = this.glare.glareOpacity)),
            t({
              tiltAngleX: this.tilt.tiltAngleX,
              tiltAngleY: this.tilt.tiltAngleY,
              tiltAngleXPercentage: this.tilt.tiltAngleXPercentage,
              tiltAngleYPercentage: this.tilt.tiltAngleYPercentage,
              glareAngle: n,
              glareOpacity: i,
              eventType: e.type,
            });
        }
        resetWrapperElTransform() {
          this.wrapperEl.node.style.transform = "";
        }
        renderPerspective() {
          const { perspective: e } = this.props;
          this.wrapperEl.node.style.transform += `perspective(${e}px) `;
        }
        renderScale() {
          const { scale: e } = this.wrapperEl;
          this.wrapperEl.node.style.transform += `scale3d(${e},${e},${e})`;
        }
        setTransitions() {
          const { transitionSpeed: e, transitionEasing: t } = this.props;
          k(this.wrapperEl.node, "all", e, t),
            this.glare && k(this.glare.glareEl, "opacity", e, t);
        }
        render() {
          const { children: e, className: t, style: n } = this.props;
          return h.default.createElement(
            "div",
            {
              ref: (e) => (this.wrapperEl.node = e),
              onMouseEnter: this.onEnter,
              onMouseMove: this.onMove,
              onMouseLeave: this.onLeave,
              onTouchStart: this.onEnter,
              onTouchMove: this.onMove,
              onTouchEnd: this.onLeave,
              className: t,
              style: n,
            },
            e
          );
        }
      }
      X.defaultProps = N;
      var O = n(2962),
        S = n(4752),
        Y = n(5819),
        I = n(7297);
      function T() {
        var e = (0, I.Z)([
          "\n  mutation GenerateDevCard($file: Upload, $url: String) {\n    devCard: generateDevCard(file: $file, url: $url) {\n      imageUrl\n    }\n  }\n",
        ]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      var B = (0, y.gql)(T()),
        R = n(6600),
        D = n(3667),
        W = function (e) {
          var t = e.onGenerateImage,
            n = e.isLoadingImage,
            i = e.error,
            r = (0, h.useContext)(d.ZP),
            a = r.user,
            o = r.showLogin,
            l = r.loadingUser,
            s = (0, Y.ZP)().rank;
          return (0, c.BX)(c.HY, {
            children: [
              (0, c.tZ)(S.Z, {
                profileImage: null === a || void 0 === a ? void 0 : a.image,
                rank: s,
                isLocked: !a,
                width: 108,
              }),
              (0, c.tZ)("h1", {
                className: "mt-10 font-bold typo-title1",
                children: "Grab your Dev Card",
              }),
              (0, c.tZ)("p", {
                className:
                  "mt-4 text-center typo-body text-theme-label-secondary max-w-[32.5rem]",
                children:
                  "Your Dev Card will show you stats about the publications and topics you love to read. Click on \u201cGenerate now\u201d to get your card and share it with your friends",
              }),
              (0, c.tZ)("div", {
                className: "mt-10 h-12",
                children:
                  !l &&
                  (a
                    ? (0, c.tZ)(g.z, {
                        className: "btn-primary",
                        buttonSize: "large",
                        onClick: function () {
                          return t();
                        },
                        loading: n,
                        children: "Generate now",
                      })
                    : (0, c.tZ)(g.z, {
                        className: "btn-secondary",
                        buttonSize: "large",
                        onClick: function () {
                          return o("devcard");
                        },
                        children: "Login to generate",
                      })),
              }),
              i && (0, c.tZ)(_.J1, { role: "alert", children: i }),
            ],
          });
        },
        G = "CUSTOM_BG",
        $ = "BY_RANK_BG",
        H = [],
        j = function (e) {
          var t = e.onGenerateImage,
            n = e.devCardSrc,
            r = e.isLoadingImage,
            a = e.error,
            l = (0, h.useContext)(d.ZP).user,
            m = (0, h.useRef)(),
            v = (0, h.useState)(),
            b = v[0],
            y = v[1],
            x = '<a href="https://app.daily.dev/'
              .concat(
                null === l || void 0 === l ? void 0 : l.username,
                '"><img src="'
              )
              .concat(n, '" width="400" alt="')
              .concat(
                null === l || void 0 === l ? void 0 : l.name,
                "'s Dev Card\"/></a>"
              ),
            E = (0, o.Z)(
              (0, C.y)(function () {
                return x;
              }),
              2
            ),
            A = E[0],
            k = E[1],
            M = (0, o.Z)(
              (0, C.y)(function () {
                return n;
              }),
              2
            ),
            L = M[0],
            z = M[1],
            N = (0, h.useState)(!1),
            O = N[0],
            S = N[1],
            Y = (0, h.useState)($),
            I = Y[0],
            T = Y[1],
            B = (function () {
              var e = (0, i.Z)(
                s().mark(function e() {
                  var t, i, r, a;
                  return s().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return S(!0), (e.next = 3), fetch(n);
                        case 3:
                          return (t = e.sent), (e.next = 6), t.blob();
                        case 6:
                          (i = e.sent),
                            (r = URL.createObjectURL(i)),
                            ((a = document.createElement("a")).href = r),
                            (a.download = "".concat(l.username, ".png")),
                            document.body.appendChild(a),
                            a.click(),
                            document.body.removeChild(a),
                            S(!1);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            R = (function () {
              var e = (0, i.Z)(
                s().mark(function e(n) {
                  return s().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          T(n), t({ url: n });
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            D = a || b;
          return (0, c.BX)("div", {
            className:
              "flex flex-col self-stretch laptop:self-center mx-2 mt-5",
            children: [
              (0, c.tZ)("h1", {
                className: "mx-3 mb-8 font-bold typo-title1",
                children: "Share your #DevCard",
              }),
              (0, c.BX)("main", {
                className:
                  "flex flex-col laptop:flex-row gap-10 laptopL:gap-20",
                children: [
                  (0, c.BX)("section", {
                    className: "flex flex-col",
                    children: [
                      (0, c.BX)(X, {
                        className:
                          "overflow-hidden relative self-stretch w-fit",
                        glareEnable: !0,
                        perspective: 1e3,
                        glareMaxOpacity: 0.25,
                        glarePosition: "all",
                        trackOnWindow: !0,
                        style: {
                          transformStyle: "preserve-3d",
                          borderRadius: "2rem",
                        },
                        "aria-busy": r,
                        children: [
                          (0, c.tZ)(Z.w, {
                            imgSrc: n,
                            imgAlt: "Your Dev Card",
                            className: "w-72 h-[25rem]",
                            eager: !0,
                          }),
                          r && (0, c.tZ)(f, { invertColor: !0 }),
                        ],
                      }),
                      (0, c.BX)("div", {
                        className: "grid grid-cols-2 gap-4 mx-2 mt-8",
                        children: [
                          (0, c.tZ)(g.z, {
                            className: "btn-primary",
                            buttonSize: "large",
                            onClick: B,
                            loading: O,
                            children: "Download",
                          }),
                          (0, c.tZ)(g.z, {
                            className: "btn-secondary",
                            buttonSize: "large",
                            onClick: function () {
                              return z();
                            },
                            children: L ? "Copied!" : "Copy link",
                          }),
                        ],
                      }),
                      (0, c.tZ)("input", {
                        ref: m,
                        type: "file",
                        name: "backgroundImage",
                        accept: "image/png,image/jpeg",
                        onChange: function (e) {
                          var n = e.target.files[0];
                          n.size > 2097152
                            ? y("Maximum image size is 2 MB")
                            : (y(null), t({ file: n }));
                        },
                        className: "hidden",
                      }),
                    ],
                  }),
                  (0, c.BX)("section", {
                    className:
                      "flex flex-col self-stretch text-theme-label-tertiary",
                    children: [
                      (0, c.tZ)("h2", {
                        className: "typo-headline",
                        children: "Customize Style",
                      }),
                      (0, c.BX)("div", {
                        className: P()(
                          "flex flex-col -my-0.5 items-start mt-8"
                        ),
                        children: [
                          (0, c.tZ)(u.R, {
                            disabled: r,
                            name: "timeOff",
                            value: $,
                            checked: I === $,
                            onChange: function () {
                              T($), t();
                            },
                            className: "my-0.5 truncate",
                            children: "By rank",
                          }),
                          H.map(function (e) {
                            return (0, c.BX)(
                              u.R,
                              {
                                disabled: r,
                                name: "timeOff",
                                value: e.value,
                                checked: I === e.value,
                                onChange: function () {
                                  return R(e.value);
                                },
                                className: "my-0.5 truncate",
                                children: [
                                  e.label,
                                  e.caption &&
                                    (0, c.tZ)("span", {
                                      className: P()(
                                        "ml-2 typo-caption2",
                                        e.caption.className
                                      ),
                                      children: e.caption.text,
                                    }),
                                ],
                              },
                              e.value
                            );
                          }),
                          (0, c.tZ)(u.R, {
                            disabled: r,
                            name: "timeOff",
                            value: G,
                            checked: I === G,
                            onChange: function () {
                              T(G), m.current.click();
                            },
                            className: "my-0.5 truncate",
                            children: "Custom",
                          }),
                        ],
                      }),
                      D && (0, c.tZ)(_.J1, { role: "alert", children: D }),
                      (0, c.BX)("div", {
                        className:
                          "flex flex-col items-start self-stretch mt-10",
                        children: [
                          (0, c.tZ)("h4", {
                            className: "mt-1 font-bold typo-caption1",
                            children: "Embed",
                          }),
                          (0, c.tZ)("textarea", {
                            className:
                              "self-stretch py-2 px-4 mt-1 w-80 bg-theme-float rounded-10 resize-none laptopL:w-[25rem] typo-body h-[7.75rem]",
                            readOnly: !0,
                            wrap: "hard",
                            children: x,
                          }),
                          (0, c.tZ)(g.z, {
                            className: "mt-4 btn-secondary",
                            buttonSize: "small",
                            onClick: function () {
                              return k;
                            },
                            children: A ? "Copied!" : "Copy code",
                          }),
                          (0, c.BX)(w.D, {
                            tag: "a",
                            href: "https://daily.dev/blog/adding-the-daily-devcard-to-your-github-profile?utm_source=webapp&utm_medium=devcard&utm_campaign=devcardguide&utm_id=inapp",
                            className: "mt-6 typo-body",
                            defaultTypo: !1,
                            target: "_blank",
                            children: [
                              (0, c.tZ)(p.Z, {
                                className: "mr-2 w-auto h-auto",
                              }),
                              "Add DevCard to your GitHub profile",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        U = {
          title: "Grab your DevCard",
          titleTemplate: "%s | daily.dev",
          description:
            "DevCard will show you stats about the publications and topics you love to read. Generate yours now.",
          openGraph: (0, a.Z)((0, r.Z)({}, D.VF), {
            type: "website",
            site_name: "daily.dev",
          }),
        },
        F = function () {
          var e = (0, h.useState)(0),
            t = e[0],
            n = e[1],
            i = (0, h.useState)(!1),
            a = i[0],
            o = i[1],
            l = (0, h.useState)(),
            s = l[0],
            d = l[1],
            p = (0, h.useState)(),
            u = p[0],
            g = p[1],
            m = function () {
              return g("Something went wrong, please try again...");
            },
            v = (0, E.useMutation)(
              function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.file,
                  n = e.url;
                return x()("".concat(b.J, "/graphql"), B, { file: t, url: n });
              },
              {
                onMutate: function () {
                  g(null), o(!0);
                },
                onSuccess: function (e) {
                  var t = new Image(),
                    i = e.devCard.imageUrl;
                  (t.src = i),
                    (t.onload = function () {
                      d(i), o(!1), n(1);
                    }),
                    (t.onerror = m);
                },
                onError: m,
              }
            ),
            f = {
              onGenerateImage: v.mutateAsync,
              devCardSrc: s,
              isLoadingImage: a,
              error: u,
            };
          return (0, c.BX)("div", {
            className: P()(
              "page flex min-h-screen flex-col items-center px-6 py-10 laptop:-mt-12 max-w-full laptop:justify-center mx-auto",
              1 === t && "laptop:flex-row laptop:gap-20"
            ),
            children: [
              (0, c.tZ)(O.PB, (0, r.Z)({}, U)),
              t ? (0, c.tZ)(j, (0, r.Z)({}, f)) : (0, c.tZ)(W, (0, r.Z)({}, f)),
            ],
          });
        };
      (F.getLayout = R.G), (F.layoutProps = { screenCentered: !1 });
      var V = F;
    },
    4752: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(6042),
        r = n(9396),
        a = n(9534),
        o = n(7997);
      n(1720);
      function l(e) {
        var t = e.profileImage,
          n = e.rank,
          l = e.isLocked,
          s = e.style,
          c = (0, a.Z)(e, ["profileImage", "rank", "isLocked", "style"]),
          h = (function (e, t) {
            return t
              ? "--theme-rank-1-color"
              : e > 0
              ? "--theme-rank-".concat(e, "-color")
              : "--theme-rank-5-color";
          })(n, l);
        return (0, o.BX)(
          "svg",
          (0, r.Z)(
            (0, i.Z)(
              {
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                viewBox: "0 0 108 148",
              },
              c
            ),
            {
              style: (0, r.Z)((0, i.Z)({}, s), { opacity: l ? 0.2 : 1 }),
              children: [
                (0, o.BX)("defs", {
                  children: [
                    (0, o.BX)("linearGradient", {
                      x1: "50%",
                      y1: "0%",
                      x2: "50%",
                      y2: "100%",
                      id: "devcard_placeholder_svg__b",
                      children: [
                        (0, o.tZ)("stop", {
                          stopColor: "var(".concat(h, "-top)"),
                          offset: "0%",
                        }),
                        (0, o.tZ)("stop", {
                          stopColor: "var(".concat(h, "-bottom)"),
                          offset: "100%",
                        }),
                      ],
                    }),
                    (0, o.tZ)("pattern", {
                      id: "devcard_placeholder_svg__c",
                      patternUnits: "objectBoundingBox",
                      x: "-15.28%",
                      width: "115.28%",
                      height: "100%",
                      children: (0, o.tZ)("use", {
                        xlinkHref: "#devcard_placeholder_svg__a",
                        transform: "scale(.03547)",
                      }),
                    }),
                    (0, o.tZ)("image", {
                      id: "devcard_placeholder_svg__a",
                      width: 2300,
                      height: 2030,
                      xlinkHref: t,
                    }),
                  ],
                }),
                (0, o.BX)("g", {
                  fill: "none",
                  fillRule: "evenodd",
                  children: [
                    (0, o.tZ)("path", {
                      d: "M94.803 0c7.184 0 13.027 5.74 13.192 12.884l.004.311v121.61c0 7.183-5.74 13.026-12.884 13.191l-.312.004H13.195C6.012 148 .17 142.26.004 135.116L0 134.805V13.195C0 6.012 5.74.17 12.884.004L13.195 0h81.608zm0 4H13.195a9.196 9.196 0 00-9.191 8.929L4 13.195v121.61a9.195 9.195 0 008.929 9.191l.266.004h81.608a9.196 9.196 0 009.192-8.929l.004-.266V13.195c0-4.989-3.974-9.05-8.93-9.191L94.804 4zM13.135 9.517l81.789.002a3.68 3.68 0 013.55 3.421l.008.195v30.833A41.337 41.337 0 0071.5 34C48.58 34 30 52.58 30 75.5S48.58 117 71.5 117a41.337 41.337 0 0026.982-9.968l-.002 27.893a3.68 3.68 0 01-3.421 3.55l-.195.008-81.789-.002a3.68 3.68 0 01-3.55-3.421l-.008-.195.002-121.79a3.68 3.68 0 013.421-3.55l.195-.008zM60.216 123.77H56.98a2.06 2.06 0 00-2.054 1.906l-.005.154v3.237a2.06 2.06 0 001.906 2.054l.153.005h3.237a2.06 2.06 0 002.054-1.906l.006-.153v-3.237a2.06 2.06 0 00-1.906-2.054l-.154-.006zm-9.655 0h-3.237a2.06 2.06 0 00-2.054 1.906l-.006.154v3.237a2.06 2.06 0 001.906 2.054l.154.005h3.237a2.06 2.06 0 002.054-1.906l.006-.153v-3.237a2.06 2.06 0 00-1.906-2.054l-.154-.006zm-9.655 0h-3.237a2.06 2.06 0 00-2.054 1.906l-.006.154v3.237a2.06 2.06 0 001.906 2.054l.154.005h3.237a2.06 2.06 0 002.054-1.906l.006-.153v-3.237a2.06 2.06 0 00-1.907-2.054l-.153-.006zm-9.655 0h-3.237a2.06 2.06 0 00-2.054 1.906l-.006.154v3.237a2.06 2.06 0 001.906 2.054l.154.005h3.237a2.06 2.06 0 002.054-1.906l.005-.153v-3.237a2.06 2.06 0 00-1.906-2.054l-.153-.006zm-9.656 0H18.36a2.06 2.06 0 00-2.054 1.906l-.006.154v3.237a2.06 2.06 0 001.906 2.054l.154.005h3.236a2.06 2.06 0 002.055-1.906l.005-.153v-3.237a2.06 2.06 0 00-1.906-2.054l-.154-.006zM23.31 14.115a9.195 9.195 0 100 18.39 9.195 9.195 0 000-18.39zm63.22 6.895H38.443a2.299 2.299 0 00-.155 4.59l.195.008h48.085a2.299 2.299 0 00.118-4.592l-.157-.006z",
                      fill: "url(#devcard_placeholder_svg__b)",
                    }),
                    t &&
                      (0, o.tZ)("path", {
                        d: "M72 40c10.474 0 19.903 4.473 26.482 11.613v48.774C91.903 107.527 82.474 112 72 112c-19.882 0-36-16.118-36-36s16.118-36 36-36z",
                        fill: "url(#devcard_placeholder_svg__c)",
                      }),
                  ],
                }),
              ],
            }
          )
        );
      }
    },
    7706: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return d;
        },
      });
      var i = n(6042),
        r = n(9396),
        a = n(9534),
        o = n(7997),
        l = n(1720),
        s = n(4184),
        c = n.n(s);
      function h(e, t) {
        var n = e.disabled,
          l = e.pressed,
          s = e.children,
          h = e.tag,
          d = void 0 === h ? "button" : h,
          p = e.defaultTypo,
          u = void 0 === p || p,
          g = e.textClassName,
          m = e.className,
          v = (0, a.Z)(e, [
            "disabled",
            "pressed",
            "children",
            "tag",
            "defaultTypo",
            "textClassName",
            "className",
          ]),
          f = "a" === d;
        return (0, o.tZ)(
          d,
          (0, r.Z)((0, i.Z)({}, v), {
            "aria-pressed": l,
            ref: t,
            className: c()(
              "flex flex-row items-center text-theme-label-tertiary cursor-pointer hover:underline focus:underline",
              u && "typo-callout",
              l && "text-theme-label-primary",
              f && (g || "text-theme-label-link"),
              n &&
                "text-theme-label-disabled pointer-events-none hover:no-underline",
              m
            ),
            children: s,
          })
        );
      }
      var d = (0, l.forwardRef)(h);
    },
    9059: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = n(6042),
        r = n(9396),
        a = n(7997),
        o = n(1720),
        l = n(7146);
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
              }),
          s.apply(this, arguments)
        );
      }
      var c = o.createElement("path", {
        d: "M9.106 24c-.002-.466-.005-.914-.01-1.343a168.92 168.92 0 01-.009-1.685l-.436.075a5.57 5.57 0 01-1.052.066 8.027 8.027 0 01-1.318-.132 2.946 2.946 0 01-1.27-.568 2.403 2.403 0 01-.834-1.164l-.19-.436a4.731 4.731 0 00-.597-.966c-.272-.353-.547-.593-.825-.72l-.132-.094a1.391 1.391 0 01-.247-.228 1.039 1.039 0 01-.17-.265c-.038-.088-.007-.16.094-.218.102-.057.285-.084.55-.084l.38.056c.252.05.565.202.938.455.373.252.68.58.92.984.29.518.64.912 1.052 1.184.41.271.824.407 1.241.407.417 0 .778-.032 1.081-.095.303-.063.588-.158.853-.284.114-.846.424-1.496.93-1.95-.721-.076-1.369-.19-1.944-.342a7.743 7.743 0 01-1.782-.738 5.103 5.103 0 01-1.527-1.269c-.404-.505-.736-1.168-.995-1.988-.259-.821-.389-1.768-.389-2.841 0-1.528.5-2.828 1.498-3.901-.467-1.149-.423-2.437.133-3.863.367-.114.91-.029 1.63.255.721.284 1.249.528 1.584.73.335.201.603.372.806.51a13.478 13.478 0 013.64-.491c1.251 0 2.465.164 3.64.492l.721-.454a10.21 10.21 0 011.744-.834c.67-.252 1.182-.322 1.537-.208.568 1.427.619 2.714.15 3.863C21.502 6.989 22 8.29 22 9.817c0 1.073-.13 2.023-.389 2.85s-.593 1.49-1.004 1.988a5.3 5.3 0 01-1.536 1.26 7.758 7.758 0 01-1.783.738c-.575.152-1.223.266-1.943.342.657.568.986 1.464.986 2.689V24H9.106z",
        fill: "currentcolor",
        fillRule: "evenodd",
      });
      var h = function (e) {
          return o.createElement(
            "svg",
            s(
              {
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                className: "icon",
              },
              e
            ),
            c
          );
        },
        d = function (e) {
          return (0, a.tZ)(
            l.Z,
            (0, r.Z)((0, i.Z)({}, e), { IconPrimary: h, IconSecondary: h })
          );
        };
    },
    6624: function (e, t, n) {
      "use strict";
      n.d(t, {
        ER: function () {
          return A;
        },
        Ef: function () {
          return x;
        },
        FT: function () {
          return C;
        },
        J1: function () {
          return w;
        },
        Ni: function () {
          return _;
        },
        Rt: function () {
          return d;
        },
        Ud: function () {
          return y;
        },
        WS: function () {
          return E;
        },
        XZ: function () {
          return Z;
        },
        _z: function () {
          return u;
        },
        ah: function () {
          return b;
        },
        be: function () {
          return M;
        },
        dd: function () {
          return m;
        },
        eO: function () {
          return p;
        },
        nJ: function () {
          return k;
        },
        pe: function () {
          return c;
        },
        ry: function () {
          return g;
        },
        sP: function () {
          return h;
        },
        tE: function () {
          return f;
        },
        u1: function () {
          return v;
        },
        vd: function () {
          return P;
        },
      });
      var i = n(7997),
        r = (n(1720), n(2374)),
        a = n(6278),
        o = n.n(a),
        l = n(3354),
        s = {
          avocado: {
            border: "border-theme-color-avocado",
            shadow: "shadow-2-avocado",
            button: "btn-primary-avocado",
          },
          burger: {
            border: "border-theme-color-burger",
            shadow: "shadow-2-burger",
            button: "btn-primary-burger",
          },
          blueCheese: {
            border: "border-theme-color-blueCheese",
            shadow: "shadow-2-blueCheese",
            button: "btn-primary-blueCheese",
          },
          lettuce: {
            border: "border-theme-color-lettuce",
            shadow: "shadow-2-lettuce",
            button: "btn-primary-lettuce",
          },
          cheese: {
            border: "border-theme-color-cheese",
            shadow: "shadow-2-cheese",
            button: "btn-primary-cheese",
          },
          bun: {
            border: "border-theme-color-bun",
            shadow: "shadow-2-bun",
            button: "btn-primary-bun",
          },
          ketchup: {
            border: "border-theme-color-ketchup",
            shadow: "shadow-2-ketchup",
            button: "btn-primary-ketchup",
          },
          bacon: {
            border: "border-theme-color-bacon",
            shadow: "shadow-2-bacon",
            button: "btn-primary-bacon",
          },
          cabbage: {
            border: "border-theme-color-cabbage",
            shadow: "shadow-2-cabbage",
            button: "btn-primary-cabbage",
          },
          onion: {
            border: "border-theme-color-onion",
            shadow: "shadow-2-onion",
            button: "btn-primary-onion",
          },
          water: {
            border: "border-theme-color-water",
            shadow: "shadow-2-water",
            button: "btn-primary-water",
          },
          primary: {
            border: "border-primary",
            shadow: "shadow-2",
            button: "btn-primary",
          },
        },
        c = function (e, t) {
          var n;
          return null !== (n = s[e]) && void 0 !== n ? n : s[t];
        },
        h = function (e) {
          return e ? "upvote comment" : "remove comment upvote";
        },
        d = function (e) {
          return "upvoted" in e
            ? e.upvoted
              ? "upvote post"
              : "remove post upvote"
            : e.bookmarked
            ? "bookmark post"
            : "remove post bookmark";
        },
        p = (0, r.Z)(
          "div",
          "text-theme-label-quaternary text-center typo-caption1",
          o().legal
        ),
        u = (0, r.Z)(
          "main",
          o().pageContainer,
          "px-4 tablet:px-8",
          "relative flex flex-col w-full items-stretch z-1 tablet:self-center"
        ),
        g = (0, r.Z)("aside", o().pageWidgets, "flex flex-col gap-6 px-6"),
        m = (0, r.Z)(
          "div",
          "flex flex-col items-stretch w-full bg-theme-bg-primary"
        ),
        v = (0, r.Z)(
          u,
          "py-6 laptop:border-theme-divider-tertiary laptop:border-l laptop:border-r laptop:min-h-screen pb-24"
        ),
        f = (0, r.Z)(
          "main",
          "withNavBar flex flex-col flex-1 items-start pb-3 px-6 laptop:px-16 pt-10 max-w-full",
          o().feedPage
        ),
        w = (0, r.Z)("div", "mt-4 text-theme-status-error typo-caption1"),
        b = (0, r.Z)("h1", "m-0 self-start typo-title2"),
        y = (0, r.Z)(
          "div",
          "absolute inset-x-0 bottom-0 h-0.5 my-0 mx-auto bg-theme-label-primary",
          o().activeTabIndicator
        ),
        x = (0, r.Z)(
          "div",
          "flex h-11 self-stretch items-center mb-6 typo-callout"
        ),
        E = (0, r.Z)(
          "header",
          "overflow-x-auto self-stretch mb-6 no-scrollbar hidden laptop:flex"
        ),
        Z = "text-2xl text-theme-label-tertiary mr-2",
        A = (0, r.Z)("summary", "cursor-pointer focus-outline"),
        P = (0, r.Z)(l.Z, "icon arrow ml-auto text-xl"),
        C = (0, r.Z)(
          "div",
          "text-theme-label-secondary multi-truncate mb-6 border-l border-theme-status-cabbage pl-4"
        ),
        _ = (0, r.Z)("span", "pr-1 font-bold text-theme-status-cabbage"),
        k = function () {
          return (0, i.tZ)("div", {
            className:
              "py-px px-2 font-bold text-white uppercase rounded typo-caption2 bg-theme-status-error",
            children: "Hot",
          });
        },
        M = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "span";
          return (0, r.Z)(e, "overflow-hidden whitespace-nowrap text-ellipsis");
        };
    },
    6278: function (e) {
      e.exports = {
        legal: "utilities_legal__mVnKh",
        pageContainer: "utilities_pageContainer__WCivt",
        feedPage: "utilities_feedPage__tk09b",
        notReady: "utilities_notReady__TTUrh",
        fixedPostsNavigation: "utilities_fixedPostsNavigation__9Ylvt",
        activeTabIndicator: "utilities_activeTabIndicator__bFVUu",
        pageWidgets: "utilities_pageWidgets__BwAGT",
        clickableImg: "utilities_clickableImg__D_R8l",
      };
    },
    872: function (e, t, n) {
      "use strict";
      function i() {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }),
          i.apply(this, arguments)
        );
      }
      function r() {
        return i.apply(this, arguments);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    e.O(0, [2010, 8790, 9774, 2888, 179], function () {
      return (t = 9242), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
