import * as React from "react"

import { cn } from "@/lib/utils"

interface ShapeProps {
  className?: string
  fill?: string
  stroke?: string
  size?: number
}

/**
 * RedWedge - El Lissitzky's iconic "Beat the Whites with the Red Wedge"
 * A triangle piercing a circle - symbol of revolutionary breakthrough
 */
export function RedWedge({
  className,
  fill = "var(--main)",
  stroke = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Circle - target being pierced */}
      <circle
        cx="65"
        cy="50"
        r="28"
        stroke={stroke}
        strokeWidth="4"
        fill="none"
      />
      {/* Wedge - piercing triangle */}
      <polygon
        points="8,32 72,50 8,68"
        fill={fill}
        transform="rotate(-12 40 50)"
      />
    </svg>
  )
}

/**
 * SovietStar - Classic 5-pointed star with sharp points
 */
export function SovietStar({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="50,5 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
        fill={fill}
      />
    </svg>
  )
}

/**
 * Gear - Industrial cogwheel with 8 teeth
 */
export function Gear({
  className,
  fill = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 10 L55 10 L55 20 A30 30 0 0 1 70 25 L78 18 L82 22 L75 30 A30 30 0 0 1 80 45 L90 45 L90 55 L80 55 A30 30 0 0 1 75 70 L82 78 L78 82 L70 75 A30 30 0 0 1 55 80 L55 90 L45 90 L45 80 A30 30 0 0 1 30 75 L22 82 L18 78 L25 70 A30 30 0 0 1 20 55 L10 55 L10 45 L20 45 A30 30 0 0 1 25 30 L18 22 L22 18 L30 25 A30 30 0 0 1 45 20 L45 10 Z"
        fill={fill}
      />
      <circle cx="50" cy="50" r="12" fill="var(--background)" />
    </svg>
  )
}

/**
 * Arrow - Bold directional arrow rotated -30deg
 */
export function Arrow({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <g transform="rotate(-30 50 50)">
        {/* Shaft */}
        <rect x="10" y="42" width="50" height="16" fill={fill} />
        {/* Head */}
        <polygon points="55,25 90,50 55,75" fill={fill} />
      </g>
    </svg>
  )
}

/**
 * Lightning - Angular lightning bolt
 */
export function Lightning({
  className,
  fill = "var(--accent)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="60,5 75,5 40,48 65,48 15,95 35,52 10,52"
        fill={fill}
      />
    </svg>
  )
}

/**
 * Megaphone - Loudspeaker/cone shape pointing right
 */
export function Megaphone({
  className,
  fill = "var(--main)",
  stroke = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Handle */}
      <rect x="8" y="40" width="20" height="20" fill={stroke} />
      {/* Cone */}
      <polygon points="25,30 90,10 90,90 25,70" fill={fill} stroke={stroke} strokeWidth="3" />
      {/* Sound lines */}
      <line x1="92" y1="35" x2="98" y2="30" stroke={stroke} strokeWidth="3" />
      <line x1="92" y1="50" x2="100" y2="50" stroke={stroke} strokeWidth="3" />
      <line x1="92" y1="65" x2="98" y2="70" stroke={stroke} strokeWidth="3" />
    </svg>
  )
}

/**
 * Banner - Pointed ribbon/flag shape
 */
export function Banner({
  className,
  fill = "var(--main)",
  stroke = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="10,10 90,10 90,90 50,65 10,90"
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
      />
    </svg>
  )
}

/**
 * RadiatingLines - Sunburst with angular rays
 */
export function RadiatingLines({
  className,
  fill = "var(--accent)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {[0, 25, 50, 75, 100, 125, 150].map((angle) => (
        <rect
          key={angle}
          x="48"
          y="50"
          width="4"
          height="45"
          fill={fill}
          transform={`rotate(${angle - 75} 50 95)`}
        />
      ))}
      {/* Sun center */}
      <circle cx="50" cy="95" r="8" fill={fill} />
    </svg>
  )
}

/**
 * Circle - Simple filled circle
 */
export function Circle({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="45" fill={fill} />
    </svg>
  )
}

/**
 * HalfCircle - Rising sun / horizon motif
 */
export function HalfCircle({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <path d="M5,70 A45,45 0 0,1 95,70 L5,70 Z" fill={fill} />
    </svg>
  )
}

// ============================================
// SHAPES 11-20
// ============================================

/**
 * DiagonalBar - Single thick bar rotated 45deg
 */
export function DiagonalBar({
  className,
  fill = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="10"
        y="42"
        width="80"
        height="16"
        fill={fill}
        transform="rotate(-45 50 50)"
      />
    </svg>
  )
}

/**
 * CrossBars - Plus sign made of thick bars
 */
export function CrossBars({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <rect x="42" y="10" width="16" height="80" fill={fill} />
      <rect x="10" y="42" width="80" height="16" fill={fill} />
    </svg>
  )
}

/**
 * CompassRose - 4-pointed angular star (like a compass)
 */
export function CompassRose({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="50,5 58,42 95,50 58,58 50,95 42,58 5,50 42,42"
        fill={fill}
      />
    </svg>
  )
}

/**
 * Factory - Simple factory chimney silhouette
 */
export function Factory({
  className,
  fill = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Main building */}
      <rect x="15" y="50" width="70" height="45" fill={fill} />
      {/* Chimney */}
      <rect x="25" y="15" width="15" height="40" fill={fill} />
      <rect x="50" y="25" width="12" height="30" fill={fill} />
      {/* Smoke puffs */}
      <circle cx="32" cy="10" r="6" fill="var(--main)" />
      <circle cx="56" cy="18" r="5" fill="var(--main)" />
    </svg>
  )
}

/**
 * Hammer - Simplified hammer head shape
 */
export function Hammer({
  className,
  fill = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <g transform="rotate(-45 50 50)">
        {/* Handle */}
        <rect x="45" y="35" width="10" height="55" fill={fill} />
        {/* Head */}
        <rect x="25" y="20" width="50" height="20" fill={fill} />
      </g>
    </svg>
  )
}

/**
 * Wheat - Stylized angular grain/wheat sheaf
 */
export function Wheat({
  className,
  fill = "var(--accent)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Stem */}
      <rect x="47" y="45" width="6" height="50" fill={fill} />
      {/* Grain heads */}
      <polygon points="50,8 40,25 50,22 60,25" fill={fill} />
      <polygon points="50,18 35,35 50,30 65,35" fill={fill} />
      <polygon points="50,28 32,45 50,38 68,45" fill={fill} />
    </svg>
  )
}

/**
 * Fist - Raised fist silhouette
 */
export function Fist({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Fist body */}
      <rect x="25" y="10" width="50" height="50" rx="8" fill={fill} />
      {/* Finger divisions */}
      <rect x="25" y="22" width="50" height="3" fill="var(--background)" />
      <rect x="25" y="35" width="50" height="3" fill="var(--background)" />
      <rect x="25" y="48" width="50" height="3" fill="var(--background)" />
      {/* Wrist */}
      <rect x="35" y="58" width="30" height="35" fill={fill} />
    </svg>
  )
}

/**
 * Tower - Tatlin's Tower inspired tapered frame
 */
export function Tower({
  className,
  fill = "var(--border)",
  stroke = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Outer frame */}
      <polygon
        points="50,5 85,95 15,95"
        fill="none"
        stroke={fill}
        strokeWidth="4"
      />
      {/* Diagonal struts */}
      <line x1="30" y1="60" x2="70" y2="40" stroke={stroke} strokeWidth="3" />
      <line x1="25" y1="75" x2="75" y2="55" stroke={stroke} strokeWidth="3" />
      {/* Inner spiral suggestion */}
      <ellipse cx="50" cy="70" rx="20" ry="8" fill="none" stroke={fill} strokeWidth="2" />
    </svg>
  )
}

/**
 * ProunBlock - Lissitzky's floating 3D rectangle
 */
export function ProunBlock({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Main face */}
      <polygon points="15,30 70,20 70,70 15,80" fill={fill} />
      {/* Top face */}
      <polygon points="15,30 70,20 85,15 30,25" fill="var(--accent)" />
      {/* Side face */}
      <polygon points="70,20 85,15 85,65 70,70" fill="var(--border)" />
    </svg>
  )
}

/**
 * DoubleArrow - Two arrows pointing at each other (tension/conflict)
 */
export function DoubleArrow({
  className,
  fill = "var(--main)",
  stroke = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Left arrow pointing right */}
      <polygon points="5,50 30,30 30,42 42,42 42,58 30,58 30,70" fill={fill} />
      {/* Right arrow pointing left */}
      <polygon points="95,50 70,30 70,42 58,42 58,58 70,58 70,70" fill={stroke} />
    </svg>
  )
}

// ============================================
// SHAPES 21-30
// ============================================

/**
 * StackedBars - Horizontal bars decreasing in width (like a bar chart)
 */
export function StackedBars({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <rect x="10" y="15" width="80" height="15" fill={fill} />
      <rect x="10" y="35" width="60" height="15" fill={fill} />
      <rect x="10" y="55" width="40" height="15" fill={fill} />
      <rect x="10" y="75" width="25" height="15" fill={fill} />
    </svg>
  )
}

/**
 * Chevron - Angular V-shape pointing down
 */
export function Chevron({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <polygon points="5,15 50,60 95,15 95,45 50,90 5,45" fill={fill} />
    </svg>
  )
}

/**
 * Bracket - Heavy square bracket [ shape
 */
export function Bracket({
  className,
  fill = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <polygon points="20,10 60,10 60,25 35,25 35,75 60,75 60,90 20,90" fill={fill} />
    </svg>
  )
}

/**
 * AngularSpiral - Squared-off spiral (not organic)
 */
export function AngularSpiral({
  className,
  stroke = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10,10 L90,10 L90,90 L20,90 L20,20 L80,20 L80,80 L30,80 L30,30 L70,30 L70,70 L40,70 L40,40 L60,40 L60,60 L50,60 L50,50"
        fill="none"
        stroke={stroke}
        strokeWidth="4"
      />
    </svg>
  )
}

/**
 * Trapezoid - Perspective/depth shape
 */
export function Trapezoid({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <polygon points="20,15 80,15 95,85 5,85" fill={fill} />
    </svg>
  )
}

/**
 * Parallelogram - Leaning rectangle implying motion
 */
export function Parallelogram({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <polygon points="25,20 95,20 75,80 5,80" fill={fill} />
    </svg>
  )
}

/**
 * SplitCircle - Circle bisected diagonally - half red, half black
 */
export function SplitCircle({
  className,
  fill = "var(--main)",
  stroke = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="45" fill={stroke} />
      <path d="M50,5 A45,45 0 0,1 95,50 L50,50 Z" fill={fill} />
      <path d="M50,50 A45,45 0 0,1 5,50 L50,50 Z" fill={fill} />
    </svg>
  )
}

/**
 * PiercedCircle - Circle with triangular wedge removed from top
 */
export function PiercedCircle({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="45" fill={fill} />
      <polygon points="50,5 30,50 70,50" fill="var(--background)" />
    </svg>
  )
}

/**
 * ConcentricCircles - Target/radio wave pattern
 */
export function ConcentricCircles({
  className,
  fill = "var(--main)",
  stroke = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke={stroke} strokeWidth="4" />
      <circle cx="50" cy="50" r="30" fill="none" stroke={stroke} strokeWidth="4" />
      <circle cx="50" cy="50" r="15" fill={fill} />
    </svg>
  )
}

/**
 * AngularBurst - 8-pointed star with very sharp points
 */
export function AngularBurst({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="50,0 58,35 95,35 65,55 75,95 50,70 25,95 35,55 5,35 42,35"
        fill={fill}
      />
    </svg>
  )
}

// ============================================
// SHAPES 31-40
// ============================================

/**
 * Flag - Rectangle with triangular notch on left
 */
export function Flag({
  className,
  fill = "var(--main)",
  stroke = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="15,10 95,10 95,90 15,90 30,50"
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
      />
    </svg>
  )
}

/**
 * Book - Open book silhouette
 */
export function Book({
  className,
  fill = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Left page */}
      <polygon points="50,25 50,90 5,80 5,15" fill={fill} />
      {/* Right page */}
      <polygon points="50,25 50,90 95,80 95,15" fill="var(--main)" />
      {/* Spine highlight */}
      <rect x="48" y="20" width="4" height="72" fill="var(--accent)" />
    </svg>
  )
}

/**
 * Eye - Geometric all-seeing eye (Rodchenko style)
 */
export function Eye({
  className,
  fill = "var(--main)",
  stroke = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Outer almond shape */}
      <ellipse cx="50" cy="50" rx="45" ry="25" fill="none" stroke={stroke} strokeWidth="4" />
      {/* Iris */}
      <circle cx="50" cy="50" r="18" fill={fill} />
      {/* Pupil */}
      <circle cx="50" cy="50" r="8" fill={stroke} />
      {/* Highlight */}
      <circle cx="55" cy="45" r="4" fill="var(--background)" />
    </svg>
  )
}

/**
 * PointingHand - Directional hand/finger pointing right
 */
export function PointingHand({
  className,
  fill = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Hand body */}
      <rect x="5" y="35" width="45" height="30" fill={fill} />
      {/* Finger pointing */}
      <polygon points="50,42 90,50 50,58" fill={fill} />
      {/* Knuckle lines */}
      <rect x="15" y="35" width="3" height="30" fill="var(--background)" />
      <rect x="28" y="35" width="3" height="30" fill="var(--background)" />
    </svg>
  )
}

/**
 * Crescent - Angular moon/crescent shape
 */
export function Crescent({
  className,
  fill = "var(--accent)",
  size = 64,
}: ShapeProps) {
  // Use React.useId for unique mask ID when available, fallback to random
  const maskId = React.useId ? React.useId() : `crescent-${Math.random().toString(36).slice(2, 9)}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <rect width="100" height="100" fill="white" />
          <circle cx="60" cy="50" r="32" fill="black" />
        </mask>
      </defs>
      <circle cx="50" cy="50" r="40" fill={fill} mask={`url(#${maskId})`} />
    </svg>
  )
}

/**
 * Exclamation - Bold typographic exclamation mark
 */
export function Exclamation({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Main bar */}
      <rect x="38" y="8" width="24" height="55" fill={fill} />
      {/* Dot */}
      <rect x="38" y="72" width="24" height="20" fill={fill} />
    </svg>
  )
}

/**
 * Question - Bold typographic question mark
 */
export function Question({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {/* Curve top */}
      <path
        d="M25,30 Q25,8 50,8 Q75,8 75,30 Q75,45 50,50 L50,58"
        fill="none"
        stroke={fill}
        strokeWidth="16"
        strokeLinecap="square"
      />
      {/* Dot */}
      <rect x="42" y="72" width="16" height="18" fill={fill} />
    </svg>
  )
}

/**
 * Equals - Equality symbol - two horizontal bars
 */
export function Equals({
  className,
  fill = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <rect x="10" y="32" width="80" height="14" fill={fill} />
      <rect x="10" y="54" width="80" height="14" fill={fill} />
    </svg>
  )
}

/**
 * Plus - Thick plus/cross shape
 */
export function Plus({
  className,
  fill = "var(--main)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <rect x="40" y="10" width="20" height="80" fill={fill} />
      <rect x="10" y="40" width="80" height="20" fill={fill} />
    </svg>
  )
}

/**
 * Conflict - X made of two crossing bars (one red, one black)
 */
export function Conflict({
  className,
  fill = "var(--main)",
  stroke = "var(--border)",
  size = 64,
}: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="10"
        y="44"
        width="80"
        height="12"
        fill={fill}
        transform="rotate(45 50 50)"
      />
      <rect
        x="10"
        y="44"
        width="80"
        height="12"
        fill={stroke}
        transform="rotate(-45 50 50)"
      />
    </svg>
  )
}

// Shape metadata for showcase/registry
export const shapes = [
  // 1-10
  { name: "RedWedge", component: RedWedge, description: "Lissitzky wedge piercing circle" },
  { name: "SovietStar", component: SovietStar, description: "Classic 5-pointed star" },
  { name: "Gear", component: Gear, description: "Industrial cogwheel" },
  { name: "Arrow", component: Arrow, description: "Bold directional arrow" },
  { name: "Lightning", component: Lightning, description: "Angular lightning bolt" },
  { name: "Megaphone", component: Megaphone, description: "Loudspeaker cone" },
  { name: "Banner", component: Banner, description: "Pointed ribbon flag" },
  { name: "RadiatingLines", component: RadiatingLines, description: "Sunburst rays" },
  { name: "Circle", component: Circle, description: "Simple filled circle" },
  { name: "HalfCircle", component: HalfCircle, description: "Rising sun horizon" },
  // 11-20
  { name: "DiagonalBar", component: DiagonalBar, description: "Thick bar rotated 45deg" },
  { name: "CrossBars", component: CrossBars, description: "Plus sign thick bars" },
  { name: "CompassRose", component: CompassRose, description: "4-pointed angular star" },
  { name: "Factory", component: Factory, description: "Factory chimney silhouette" },
  { name: "Hammer", component: Hammer, description: "Simplified hammer shape" },
  { name: "Wheat", component: Wheat, description: "Angular grain sheaf" },
  { name: "Fist", component: Fist, description: "Raised fist silhouette" },
  { name: "Tower", component: Tower, description: "Tatlin's Tower inspired" },
  { name: "ProunBlock", component: ProunBlock, description: "Floating 3D rectangle" },
  { name: "DoubleArrow", component: DoubleArrow, description: "Arrows in conflict" },
  // 21-30
  { name: "StackedBars", component: StackedBars, description: "Decreasing bar chart" },
  { name: "Chevron", component: Chevron, description: "Angular V-shape" },
  { name: "Bracket", component: Bracket, description: "Heavy square bracket" },
  { name: "AngularSpiral", component: AngularSpiral, description: "Squared-off spiral" },
  { name: "Trapezoid", component: Trapezoid, description: "Perspective depth shape" },
  { name: "Parallelogram", component: Parallelogram, description: "Leaning rectangle" },
  { name: "SplitCircle", component: SplitCircle, description: "Bisected circle" },
  { name: "PiercedCircle", component: PiercedCircle, description: "Circle with wedge cutout" },
  { name: "ConcentricCircles", component: ConcentricCircles, description: "Target pattern" },
  { name: "AngularBurst", component: AngularBurst, description: "8-pointed sharp star" },
  // 31-40
  { name: "Flag", component: Flag, description: "Rectangle with notch" },
  { name: "Book", component: Book, description: "Open book silhouette" },
  { name: "Eye", component: Eye, description: "All-seeing eye" },
  { name: "PointingHand", component: PointingHand, description: "Directional hand" },
  { name: "Crescent", component: Crescent, description: "Angular moon shape" },
  { name: "Exclamation", component: Exclamation, description: "Bold exclamation mark" },
  { name: "Question", component: Question, description: "Bold question mark" },
  { name: "Equals", component: Equals, description: "Equality symbol" },
  { name: "Plus", component: Plus, description: "Thick plus shape" },
  { name: "Conflict", component: Conflict, description: "Crossing X bars" },
] as const

export type ShapeName = (typeof shapes)[number]["name"]
