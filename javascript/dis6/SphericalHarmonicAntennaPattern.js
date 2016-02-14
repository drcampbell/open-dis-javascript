/**
 * Section 5.2.4.3. Used when the antenna pattern type in the transmitter pdu is of value 2.         Specified the direction and radiation pattern from a radio transmitter's antenna.        NOTE: this class must be hand-coded to clean up some implementation details.
 *
 * Copyright (c) 2008-2015, MOVES Institute, Naval Postgraduate School. All rights reserved.
 * This work is licensed under the BSD open source license, available at https://www.movesinstitute.org/licenses/bsd.html
 *
 * @author DMcG
 */
// On the client side, support for a  namespace.
if (typeof null === "undefined")
 null = {};


// Support for node.js style modules. Ignored if used in a client context.
// See http://howtonode.org/creating-custom-modules
if (typeof exports === "undefined")
 exports = {};


null.SphericalHarmonicAntennaPattern = function()
{
   this.harmonicOrder = 0;

  null.SphericalHarmonicAntennaPattern.prototype.initFromBinary = function(inputStream)
  {
       this.harmonicOrder = inputStream.readByte();
  };

  null.SphericalHarmonicAntennaPattern.prototype.encodeToBinary = function(outputStream)
  {
       outputStream.writeByte(this.harmonicOrder);
  };
}; // end of class

 // node.js module support
exports.SphericalHarmonicAntennaPattern = null.SphericalHarmonicAntennaPattern;

// End of SphericalHarmonicAntennaPattern class
