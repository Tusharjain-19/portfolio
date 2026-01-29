
/**
 * Astronomy utilities for real sun/moon behavior
 * No API calls - pure calculations
 */

/**
 * Calculate real moon phase based on date
 * Returns 0-1 where:
 * 0 = New Moon
 * 0.25 = First Quarter
 * 0.5 = Full Moon
 * 0.75 = Last Quarter
 */
export function getMoonPhase(date: Date = new Date()): number {
  const synodicMonth = 29.53058867; // Average lunar cycle in days
  const knownNewMoon = new Date("2000-01-06T18:14:00Z"); // Reference new moon
  
  const daysSince = (date.getTime() - knownNewMoon.getTime()) / 86400000;
  const phase = ((daysSince % synodicMonth) + synodicMonth) % synodicMonth;
  
  return phase / synodicMonth; // 0 to 1
}

/**
 * Get moon phase name for accessibility
 */
export function getMoonPhaseName(phase: number): string {
  if (phase < 0.0625) return "New Moon";
  if (phase < 0.1875) return "Waxing Crescent";
  if (phase < 0.3125) return "First Quarter";
  if (phase < 0.4375) return "Waxing Gibbous";
  if (phase < 0.5625) return "Full Moon";
  if (phase < 0.6875) return "Waning Gibbous";
  if (phase < 0.8125) return "Last Quarter";
  if (phase < 0.9375) return "Waning Crescent";
  return "New Moon";
}

/**
 * Calculate moon shadow offset for SVG mask
 * Returns pixel offset for the shadow circle
 */
export function getMoonShadowOffset(phase: number): number {
  // Convert phase (0-1) to shadow offset (-45 to 45)
  // 0 (new moon) = -45 (fully shadowed)
  // 0.5 (full moon) = 45 (no shadow)
  // 1 (new moon again) = -45
  
  if (phase <= 0.5) {
    // Waxing: shadow moves from left to right
    return (phase * 2 - 1) * 45;
  } else {
    // Waning: shadow moves from right back to left
    return ((1 - phase) * 2 - 1) * 45;
  }
}

/**
 * Determine if it's daytime based on current hour
 */
export function isDaytime(date: Date = new Date()): boolean {
  const hour = date.getHours();
  return hour >= 6 && hour < 18;
}

/**
 * Get time of day for more granular control
 */
export function getTimeOfDay(date: Date = new Date()): 'dawn' | 'day' | 'dusk' | 'night' {
  const hour = date.getHours();
  
  if (hour >= 5 && hour < 7) return 'dawn';
  if (hour >= 7 && hour < 17) return 'day';
  if (hour >= 17 && hour < 19) return 'dusk';
  return 'night';
}
