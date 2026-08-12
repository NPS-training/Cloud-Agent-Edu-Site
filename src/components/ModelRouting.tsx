"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { models } from "@/content/site";
import { Section } from "./Section";

type RoutingGeometry = {
  width: number;
  height: number;
  inputs: string[];
  outputs: string[];
};

export function ModelRouting() {
  const routingRef = useRef<HTMLDivElement>(null);
  const routerRef = useRef<HTMLDivElement>(null);
  const sourceRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const destinationRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [geometry, setGeometry] = useState<RoutingGeometry | null>(null);

  useLayoutEffect(() => {
    const updateGeometry = () => {
      const routing = routingRef.current;
      const router = routerRef.current;
      if (!routing || !router) return;
      const bounds = routing.getBoundingClientRect();
      const routerBounds = router.getBoundingClientRect();
      const point = (element: HTMLSpanElement | null, side: "left" | "right") => {
        const item = element?.getBoundingClientRect();
        if (!item) return null;
        return {
          x: (side === "left" ? item.left : item.right) - bounds.left,
          y: item.top + item.height / 2 - bounds.top,
        };
      };
      const routerLeft = routerBounds.left - bounds.left;
      const routerRight = routerBounds.right - bounds.left;
      const routerCenter = routerBounds.top + routerBounds.height / 2 - bounds.top;
      const inputs = sourceRefs.current
        .map((item) => point(item, "right"))
        .filter((item): item is { x: number; y: number } => Boolean(item))
        .map(
          (item) =>
            `M ${item.x} ${item.y} C ${item.x + (routerLeft - item.x) * 0.55} ${item.y}, ${routerLeft - (routerLeft - item.x) * 0.35} ${routerCenter}, ${routerLeft} ${routerCenter}`,
        );
      const outputs = destinationRefs.current
        .map((item) => point(item, "left"))
        .filter((item): item is { x: number; y: number } => Boolean(item))
        .map(
          (item) =>
            `M ${routerRight} ${routerCenter} C ${routerRight + (item.x - routerRight) * 0.35} ${routerCenter}, ${item.x - (item.x - routerRight) * 0.55} ${item.y}, ${item.x} ${item.y}`,
        );
      setGeometry({ width: bounds.width, height: bounds.height, inputs, outputs });
    };
    updateGeometry();
    const observer = new ResizeObserver(updateGeometry);
    if (routingRef.current) observer.observe(routingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="models" number="08" kicker="The models" title="Model-agnostic by design.">
      <p className="lede">
        Devin is a compound AI system with access to all frontier models in one platform. Tasks are
        routed to the best-fit model.
      </p>
      <div className="routing-rail" aria-hidden="true">
        <span>Access all frontier models in one place</span>
        <span>Route by best-fit per task</span>
      </div>
      <div className="routing" ref={routingRef}>
        {geometry && (
          <svg
            className="routing-lines"
            viewBox={`0 0 ${geometry.width} ${geometry.height}`}
            aria-hidden="true"
          >
            <defs>
              <marker
                id="routing-arrow"
                markerWidth="8"
                markerHeight="8"
                refX="7"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L7,3 z" />
              </marker>
            </defs>
            {geometry.inputs.map((path) => (
              <path className="routing-line input-line" d={path} key={path} />
            ))}
            {geometry.outputs.map((path) => (
              <path className="routing-line output-line" d={path} key={path} />
            ))}
          </svg>
        )}
        <div className="sources">
          {models.sources.map((source, index) => (
            <span
              key={source.name}
              ref={(element) => {
                sourceRefs.current[index] = element;
              }}
            >
              <b>{source.name}</b>
              <small>{source.label}</small>
            </span>
          ))}
        </div>
        <div className="router" ref={routerRef}>
          Devin orchestration
        </div>
        <div className="dest">
          {models.destinations.map((destination, index) => (
            <span
              key={destination.name}
              ref={(element) => {
                destinationRefs.current[index] = element;
              }}
            >
              <b>{destination.name}</b>
              <small>{destination.label}</small>
            </span>
          ))}
        </div>
      </div>
      <p>{models.fusion}</p>
      <div className="callout">
        <b>Intelligence saturation.</b> {models.saturation}
      </div>
      <p>{models.lockIn}</p>
      <p className="kicker-line">{models.kicker}</p>
    </Section>
  );
}
