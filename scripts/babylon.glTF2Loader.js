/// <reference path="../../../../dist/preview release/babylon.d.ts"/>
var BABYLON;
(function (BABYLON) {
    var GLTF2;
    (function (GLTF2) {
        /**
        * Enums
        */
        var EBufferViewTarget;
        (function (EBufferViewTarget) {
            EBufferViewTarget[EBufferViewTarget["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
            EBufferViewTarget[EBufferViewTarget["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
        })(EBufferViewTarget = GLTF2.EBufferViewTarget || (GLTF2.EBufferViewTarget = {}));
        var EComponentType;
        (function (EComponentType) {
            EComponentType[EComponentType["BYTE"] = 5120] = "BYTE";
            EComponentType[EComponentType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
            EComponentType[EComponentType["SHORT"] = 5122] = "SHORT";
            EComponentType[EComponentType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
            EComponentType[EComponentType["FLOAT"] = 5126] = "FLOAT";
        })(EComponentType = GLTF2.EComponentType || (GLTF2.EComponentType = {}));
        var EMeshPrimitiveMode;
        (function (EMeshPrimitiveMode) {
            EMeshPrimitiveMode[EMeshPrimitiveMode["POINTS"] = 0] = "POINTS";
            EMeshPrimitiveMode[EMeshPrimitiveMode["LINES"] = 1] = "LINES";
            EMeshPrimitiveMode[EMeshPrimitiveMode["LINE_LOOP"] = 2] = "LINE_LOOP";
            EMeshPrimitiveMode[EMeshPrimitiveMode["LINE_STRIP"] = 3] = "LINE_STRIP";
            EMeshPrimitiveMode[EMeshPrimitiveMode["TRIANGLES"] = 4] = "TRIANGLES";
            EMeshPrimitiveMode[EMeshPrimitiveMode["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
            EMeshPrimitiveMode[EMeshPrimitiveMode["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
        })(EMeshPrimitiveMode = GLTF2.EMeshPrimitiveMode || (GLTF2.EMeshPrimitiveMode = {}));
        var EParameterType;
        (function (EParameterType) {
            EParameterType[EParameterType["BYTE"] = 5120] = "BYTE";
            EParameterType[EParameterType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
            EParameterType[EParameterType["SHORT"] = 5122] = "SHORT";
            EParameterType[EParameterType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
            EParameterType[EParameterType["INT"] = 5124] = "INT";
            EParameterType[EParameterType["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
            EParameterType[EParameterType["FLOAT"] = 5126] = "FLOAT";
            EParameterType[EParameterType["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
            EParameterType[EParameterType["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
            EParameterType[EParameterType["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
            EParameterType[EParameterType["INT_VEC2"] = 35667] = "INT_VEC2";
            EParameterType[EParameterType["INT_VEC3"] = 35668] = "INT_VEC3";
            EParameterType[EParameterType["INT_VEC4"] = 35669] = "INT_VEC4";
            EParameterType[EParameterType["BOOL"] = 35670] = "BOOL";
            EParameterType[EParameterType["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
            EParameterType[EParameterType["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
            EParameterType[EParameterType["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
            EParameterType[EParameterType["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
            EParameterType[EParameterType["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
            EParameterType[EParameterType["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
            EParameterType[EParameterType["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
        })(EParameterType = GLTF2.EParameterType || (GLTF2.EParameterType = {}));
        var ETextureMagFilter;
        (function (ETextureMagFilter) {
            ETextureMagFilter[ETextureMagFilter["NEAREST"] = 9728] = "NEAREST";
            ETextureMagFilter[ETextureMagFilter["LINEAR"] = 9728] = "LINEAR";
        })(ETextureMagFilter = GLTF2.ETextureMagFilter || (GLTF2.ETextureMagFilter = {}));
        var ETextureMinFilter;
        (function (ETextureMinFilter) {
            ETextureMinFilter[ETextureMinFilter["NEAREST"] = 9728] = "NEAREST";
            ETextureMinFilter[ETextureMinFilter["LINEAR"] = 9728] = "LINEAR";
            ETextureMinFilter[ETextureMinFilter["NEAREST_MIPMAP_NEAREST"] = 9984] = "NEAREST_MIPMAP_NEAREST";
            ETextureMinFilter[ETextureMinFilter["LINEAR_MIPMAP_NEAREST"] = 9985] = "LINEAR_MIPMAP_NEAREST";
            ETextureMinFilter[ETextureMinFilter["NEAREST_MIPMAP_LINEAR"] = 9986] = "NEAREST_MIPMAP_LINEAR";
            ETextureMinFilter[ETextureMinFilter["LINEAR_MIPMAP_LINEAR"] = 9987] = "LINEAR_MIPMAP_LINEAR";
        })(ETextureMinFilter = GLTF2.ETextureMinFilter || (GLTF2.ETextureMinFilter = {}));
        var ETextureFormat;
        (function (ETextureFormat) {
            ETextureFormat[ETextureFormat["ALPHA"] = 6406] = "ALPHA";
            ETextureFormat[ETextureFormat["RGB"] = 6407] = "RGB";
            ETextureFormat[ETextureFormat["RGBA"] = 6408] = "RGBA";
            ETextureFormat[ETextureFormat["LUMINANCE"] = 6409] = "LUMINANCE";
            ETextureFormat[ETextureFormat["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
        })(ETextureFormat = GLTF2.ETextureFormat || (GLTF2.ETextureFormat = {}));
        var ETextureTarget;
        (function (ETextureTarget) {
            ETextureTarget[ETextureTarget["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
        })(ETextureTarget = GLTF2.ETextureTarget || (GLTF2.ETextureTarget = {}));
        var ETextureType;
        (function (ETextureType) {
            ETextureType[ETextureType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
            ETextureType[ETextureType["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
            ETextureType[ETextureType["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
            ETextureType[ETextureType["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
        })(ETextureType = GLTF2.ETextureType || (GLTF2.ETextureType = {}));
        var ETextureWrapMode;
        (function (ETextureWrapMode) {
            ETextureWrapMode[ETextureWrapMode["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
            ETextureWrapMode[ETextureWrapMode["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
            ETextureWrapMode[ETextureWrapMode["REPEAT"] = 10497] = "REPEAT";
        })(ETextureWrapMode = GLTF2.ETextureWrapMode || (GLTF2.ETextureWrapMode = {}));
    })(GLTF2 = BABYLON.GLTF2 || (BABYLON.GLTF2 = {}));
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=babylon.glTFLoaderInterfaces.js.map

/// <reference path="../../../../dist/preview release/babylon.d.ts"/>
/// <reference path="../../../../dist/preview release/loaders/babylon.glTFFileLoader.d.ts"/>
var BABYLON;
(function (BABYLON) {
    var GLTF2;
    (function (GLTF2) {
        /**
        * Values
        */
        var glTFAnimationPaths = ["translation", "rotation", "scale"];
        var babylonAnimationPaths = ["position", "rotationQuaternion", "scaling"];
        /**
        * Utils
        */
        var normalizeUVs = function (buffer) {
            if (!buffer) {
                return;
            }
            for (var i = 0; i < buffer.length / 2; i++) {
                buffer[i * 2 + 1] = 1.0 - buffer[i * 2 + 1];
            }
        };
        var createStringId = function (index) {
            return "node" + index;
        };
        /**
        * Returns the animation path (glTF -> Babylon)
        */
        var getAnimationPath = function (path) {
            var index = glTFAnimationPaths.indexOf(path);
            if (index !== -1) {
                return babylonAnimationPaths[index];
            }
            return path;
        };
        /**
        * Loads and creates animations
        */
        var loadAnimations = function (runtime) {
            var animations = runtime.gltf.animations;
            if (!animations) {
                return;
            }
            for (var animationIndex = 0; animationIndex < animations.length; animationIndex++) {
                var animation = animations[animationIndex];
                if (!animation || !animation.channels || !animation.samplers) {
                    continue;
                }
                var lastAnimation = null;
                for (var channelIndex = 0; channelIndex < animation.channels.length; channelIndex++) {
                    var channel = animation.channels[channelIndex];
                    if (!channel) {
                        continue;
                    }
                    var sampler = animation.samplers[channel.sampler];
                    if (!sampler) {
                        continue;
                    }
                    var inputData = sampler.input;
                    var outputData = sampler.output;
                    var bufferInput = GLTF2.GLTFUtils.GetBufferFromAccessor(runtime, runtime.gltf.accessors[inputData]);
                    var bufferOutput = GLTF2.GLTFUtils.GetBufferFromAccessor(runtime, runtime.gltf.accessors[outputData]);
                    var targetID = channel.target.node;
                    var targetNode = runtime.babylonScene.getNodeByID(createStringId(targetID));
                    if (targetNode === null) {
                        BABYLON.Tools.Warn("Creating animation index " + animationIndex + " but cannot find node index " + targetID + " to attach to");
                        continue;
                    }
                    var isBone = targetNode instanceof BABYLON.Bone;
                    // Get target path (position, rotation or scaling)
                    var targetPath = channel.target.path;
                    var targetPathIndex = glTFAnimationPaths.indexOf(targetPath);
                    if (targetPathIndex !== -1) {
                        targetPath = babylonAnimationPaths[targetPathIndex];
                    }
                    // Determine animation type
                    var animationType = BABYLON.Animation.ANIMATIONTYPE_MATRIX;
                    if (!isBone) {
                        if (targetPath === "rotationQuaternion") {
                            animationType = BABYLON.Animation.ANIMATIONTYPE_QUATERNION;
                            targetNode.rotationQuaternion = new BABYLON.Quaternion();
                        }
                        else {
                            animationType = BABYLON.Animation.ANIMATIONTYPE_VECTOR3;
                        }
                    }
                    // Create animation and key frames
                    var babylonAnimation = null;
                    var keys = [];
                    var arrayOffset = 0;
                    var modifyKey = false;
                    if (isBone && lastAnimation && lastAnimation.getKeys().length === bufferInput.length) {
                        babylonAnimation = lastAnimation;
                        modifyKey = true;
                    }
                    if (!modifyKey) {
                        var animationName = animation.name || "anim" + animationIndex;
                        babylonAnimation = new BABYLON.Animation(animationName, isBone ? "_matrix" : targetPath, 1, animationType, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                    }
                    // For each frame
                    for (var j = 0; j < bufferInput.length; j++) {
                        var value = null;
                        if (targetPath === "rotationQuaternion") {
                            value = BABYLON.Quaternion.FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2], bufferOutput[arrayOffset + 3]]);
                            arrayOffset += 4;
                        }
                        else {
                            value = BABYLON.Vector3.FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2]]);
                            arrayOffset += 3;
                        }
                        if (isBone) {
                            var bone = targetNode;
                            var translation = BABYLON.Vector3.Zero();
                            var rotationQuaternion = new BABYLON.Quaternion();
                            var scaling = BABYLON.Vector3.Zero();
                            // Warning on decompose
                            var mat = bone.getBaseMatrix();
                            if (modifyKey) {
                                mat = lastAnimation.getKeys()[j].value;
                            }
                            mat.decompose(scaling, rotationQuaternion, translation);
                            if (targetPath === "position") {
                                translation = value;
                            }
                            else if (targetPath === "rotationQuaternion") {
                                rotationQuaternion = value;
                            }
                            else {
                                scaling = value;
                            }
                            value = BABYLON.Matrix.Compose(scaling, rotationQuaternion, translation);
                        }
                        if (!modifyKey) {
                            keys.push({
                                frame: bufferInput[j],
                                value: value
                            });
                        }
                        else {
                            lastAnimation.getKeys()[j].value = value;
                        }
                    }
                    // Finish
                    if (!modifyKey) {
                        babylonAnimation.setKeys(keys);
                        targetNode.animations.push(babylonAnimation);
                    }
                    lastAnimation = babylonAnimation;
                    runtime.babylonScene.stopAnimation(targetNode);
                    runtime.babylonScene.beginAnimation(targetNode, 0, bufferInput[bufferInput.length - 1], true, 1.0);
                }
            }
        };
        /**
        * Returns the bones transformation matrix
        */
        var configureBoneTransformation = function (node) {
            var mat = null;
            if (node.translation || node.rotation || node.scale) {
                var scale = BABYLON.Vector3.FromArray(node.scale || [1, 1, 1]);
                var rotation = BABYLON.Quaternion.FromArray(node.rotation || [0, 0, 0, 1]);
                var position = BABYLON.Vector3.FromArray(node.translation || [0, 0, 0]);
                mat = BABYLON.Matrix.Compose(scale, rotation, position);
            }
            else {
                mat = node.matrix ? BABYLON.Matrix.FromArray(node.matrix) : BABYLON.Matrix.Identity();
            }
            return mat;
        };
        /**
        * Returns the parent bone
        */
        var getParentBone = function (runtime, skin, index, newSkeleton) {
            // Try to find
            var nodeStringID = createStringId(index);
            for (var i = 0; i < newSkeleton.bones.length; i++) {
                if (newSkeleton.bones[i].id === nodeStringID) {
                    return newSkeleton.bones[i].getParent();
                }
            }
            // Not found, search in gltf nodes
            var joints = skin.joints;
            for (var j = 0; j < joints.length; j++) {
                var parentID = joints[j];
                var parent = runtime.gltf.nodes[parentID];
                var children = parent.children;
                for (var i = 0; i < children.length; i++) {
                    var childID = children[i];
                    var child = runtime.gltf.nodes[childID];
                    if (!nodeIsInJoints(skin, childID)) {
                        continue;
                    }
                    if (childID === index) {
                        var mat = configureBoneTransformation(parent);
                        var bone = new BABYLON.Bone(parent.name || createStringId(parentID), newSkeleton, getParentBone(runtime, skin, parentID, newSkeleton), mat);
                        bone.id = createStringId(parentID);
                        return bone;
                    }
                }
            }
            return null;
        };
        /**
        * Returns the appropriate root node
        */
        var getNodeToRoot = function (nodesToRoot, index) {
            for (var i = 0; i < nodesToRoot.length; i++) {
                var nodeToRoot = nodesToRoot[i];
                if (nodeToRoot.node.children) {
                    for (var j = 0; j < nodeToRoot.node.children.length; j++) {
                        var child = nodeToRoot.node.children[j];
                        if (child === index) {
                            return nodeToRoot.bone;
                        }
                    }
                }
            }
            return null;
        };
        /**
        * Returns the node with the node index
        */
        var getJointNode = function (runtime, index) {
            var node = runtime.gltf.nodes[index];
            if (node) {
                return {
                    node: node,
                    index: index
                };
            }
            return null;
        };
        /**
        * Checks if a nodes is in joints
        */
        var nodeIsInJoints = function (skin, index) {
            for (var i = 0; i < skin.joints.length; i++) {
                if (skin.joints[i] === index) {
                    return true;
                }
            }
            return false;
        };
        /**
        * Fills the nodes to root for bones and builds hierarchy
        */
        var getNodesToRoot = function (runtime, newSkeleton, skin, nodesToRoot) {
            // Creates nodes for root
            for (var i = 0; i < runtime.gltf.nodes.length; i++) {
                var node = runtime.gltf.nodes[i];
                if (nodeIsInJoints(skin, i)) {
                    continue;
                }
                // Create node to root bone
                var mat = configureBoneTransformation(node);
                var bone = new BABYLON.Bone(node.name || createStringId(i), newSkeleton, null, mat);
                bone.id = createStringId(i);
                nodesToRoot.push({ bone: bone, node: node, index: i });
            }
            // Parenting
            for (var i = 0; i < nodesToRoot.length; i++) {
                var nodeToRoot = nodesToRoot[i];
                var children = nodeToRoot.node.children;
                if (children) {
                    for (var j = 0; j < children.length; j++) {
                        var child = null;
                        for (var k = 0; k < nodesToRoot.length; k++) {
                            if (nodesToRoot[k].index === children[j]) {
                                child = nodesToRoot[k];
                                break;
                            }
                        }
                        if (child) {
                            child.bone._parent = nodeToRoot.bone;
                            nodeToRoot.bone.children.push(child.bone);
                        }
                    }
                }
            }
        };
        /**
        * Imports a skeleton
        */
        var importSkeleton = function (runtime, skinNode, skin) {
            var name = skin.name || "skin" + skinNode.skin;
            var babylonSkeleton = skin.babylonSkeleton;
            if (!babylonSkeleton) {
                babylonSkeleton = new BABYLON.Skeleton(name, "skin" + skinNode.skin, runtime.babylonScene);
            }
            if (!skin.babylonSkeleton) {
                return babylonSkeleton;
            }
            // Matrices
            var accessor = runtime.gltf.accessors[skin.inverseBindMatrices];
            var buffer = GLTF2.GLTFUtils.GetBufferFromAccessor(runtime, accessor);
            // Find the root bones
            var nodesToRoot = [];
            var nodesToRootToAdd = [];
            getNodesToRoot(runtime, babylonSkeleton, skin, nodesToRoot);
            babylonSkeleton.bones = [];
            // Joints
            for (var i = 0; i < skin.joints.length; i++) {
                var jointNode = getJointNode(runtime, skin.joints[i]);
                var node = jointNode.node;
                if (!node) {
                    BABYLON.Tools.Warn("Joint index " + skin.joints[i] + " does not exist");
                    continue;
                }
                var index = jointNode.index;
                var stringID = createStringId(index);
                // Optimize, if the bone already exists...
                var existingBone = runtime.babylonScene.getBoneByID(stringID);
                if (existingBone) {
                    babylonSkeleton.bones.push(existingBone);
                    continue;
                }
                // Search for parent bone
                var foundBone = false;
                var parentBone = null;
                for (var j = 0; j < i; j++) {
                    var joint = getJointNode(runtime, skin.joints[j]).node;
                    if (!joint) {
                        BABYLON.Tools.Warn("Joint index " + skin.joints[j] + " does not exist when looking for parent");
                        continue;
                    }
                    var children = joint.children;
                    foundBone = false;
                    for (var k = 0; k < children.length; k++) {
                        if (children[k] === index) {
                            parentBone = getParentBone(runtime, skin, skin.joints[j], babylonSkeleton);
                            foundBone = true;
                            break;
                        }
                    }
                    if (foundBone) {
                        break;
                    }
                }
                // Create bone
                var mat = configureBoneTransformation(node);
                if (!parentBone && nodesToRoot.length > 0) {
                    parentBone = getNodeToRoot(nodesToRoot, index);
                    if (parentBone) {
                        if (nodesToRootToAdd.indexOf(parentBone) === -1) {
                            nodesToRootToAdd.push(parentBone);
                        }
                    }
                }
                var bone = new BABYLON.Bone(node.name || stringID, babylonSkeleton, parentBone, mat);
                bone.id = stringID;
            }
            // Polish
            var bones = babylonSkeleton.bones;
            babylonSkeleton.bones = [];
            for (var i = 0; i < skin.joints.length; i++) {
                var jointNode = getJointNode(runtime, skin.joints[i]);
                if (!jointNode) {
                    continue;
                }
                var jointNodeStringId = createStringId(jointNode.index);
                for (var j = 0; j < bones.length; j++) {
                    if (bones[j].id === jointNodeStringId) {
                        babylonSkeleton.bones.push(bones[j]);
                        break;
                    }
                }
            }
            babylonSkeleton.prepare();
            // Finish
            for (var i = 0; i < nodesToRootToAdd.length; i++) {
                babylonSkeleton.bones.push(nodesToRootToAdd[i]);
            }
            return babylonSkeleton;
        };
        /**
         * Gets a material
         */
        var getMaterial = function (runtime, index) {
            if (index === undefined) {
                return GLTF2.GLTFUtils.GetDefaultMaterial(runtime);
            }
            var materials = runtime.gltf.materials;
            if (!materials || index < 0 || index >= materials.length) {
                BABYLON.Tools.Error("Invalid material index");
                return GLTF2.GLTFUtils.GetDefaultMaterial(runtime);
            }
            var material = runtime.gltf.materials[index].babylonMaterial;
            if (!material) {
                return GLTF2.GLTFUtils.GetDefaultMaterial(runtime);
            }
            return material;
        };
        /**
        * Imports a mesh and its geometries
        */
        var importMesh = function (runtime, node, mesh) {
            var name = mesh.name || node.name || "mesh" + node.mesh;
            var babylonMesh = node.babylonNode;
            if (!babylonMesh) {
                babylonMesh = new BABYLON.Mesh(name, runtime.babylonScene);
            }
            if (!node.babylonNode) {
                return babylonMesh;
            }
            var multiMat = new BABYLON.MultiMaterial(name, runtime.babylonScene);
            if (!babylonMesh.material) {
                babylonMesh.material = multiMat;
            }
            var vertexData = new BABYLON.VertexData();
            var geometry = new BABYLON.Geometry(name, runtime.babylonScene, vertexData, false, babylonMesh);
            var verticesStarts = [];
            var verticesCounts = [];
            var indexStarts = [];
            var indexCounts = [];
            // Positions, normals and UVs
            for (var index = 0; index < mesh.primitives.length; index++) {
                // Temporary vertex data
                var tempVertexData = new BABYLON.VertexData();
                var primitive = mesh.primitives[index];
                if (primitive.mode !== GLTF2.EMeshPrimitiveMode.TRIANGLES) {
                    // continue;
                }
                var attributes = primitive.attributes;
                var accessor = null;
                var buffer = null;
                // Set positions, normal and uvs
                for (var semantic in attributes) {
                    // Link accessor and buffer view
                    accessor = runtime.gltf.accessors[attributes[semantic]];
                    buffer = GLTF2.GLTFUtils.GetBufferFromAccessor(runtime, accessor);
                    if (semantic === "NORMAL") {
                        tempVertexData.normals = new Float32Array(buffer.length);
                        tempVertexData.normals.set(buffer);
                    }
                    else if (semantic === "POSITION") {
                        if (BABYLON.GLTFFileLoader.HomogeneousCoordinates) {
                            tempVertexData.positions = new Float32Array(buffer.length - buffer.length / 4);
                            for (var j = 0; j < buffer.length; j += 4) {
                                tempVertexData.positions[j] = buffer[j];
                                tempVertexData.positions[j + 1] = buffer[j + 1];
                                tempVertexData.positions[j + 2] = buffer[j + 2];
                            }
                        }
                        else {
                            tempVertexData.positions = new Float32Array(buffer.length);
                            tempVertexData.positions.set(buffer);
                        }
                        verticesCounts.push(tempVertexData.positions.length);
                    }
                    else if (semantic === "TANGENT") {
                        tempVertexData.tangents = new Float32Array(buffer.length);
                        tempVertexData.tangents.set(buffer);
                    }
                    else if (semantic.indexOf("TEXCOORD_") !== -1) {
                        var channel = Number(semantic.split("_")[1]);
                        var uvKind = BABYLON.VertexBuffer.UVKind + (channel === 0 ? "" : (channel + 1));
                        var uvs = new Float32Array(buffer.length);
                        uvs.set(buffer);
                        normalizeUVs(uvs);
                        tempVertexData.set(uvs, uvKind);
                    }
                    else if (semantic === "JOINT") {
                        tempVertexData.matricesIndices = new Float32Array(buffer.length);
                        tempVertexData.matricesIndices.set(buffer);
                    }
                    else if (semantic === "WEIGHT") {
                        tempVertexData.matricesWeights = new Float32Array(buffer.length);
                        tempVertexData.matricesWeights.set(buffer);
                    }
                    else if (semantic === "COLOR_0") {
                        tempVertexData.colors = new Float32Array(buffer.length);
                        tempVertexData.colors.set(buffer);
                    }
                    else {
                        BABYLON.Tools.Warn("Ignoring unrecognized semantic '" + semantic + "'");
                    }
                }
                // Indices
                accessor = runtime.gltf.accessors[primitive.indices];
                if (accessor) {
                    buffer = GLTF2.GLTFUtils.GetBufferFromAccessor(runtime, accessor);
                    tempVertexData.indices = new Int32Array(buffer.length);
                    tempVertexData.indices.set(buffer);
                    indexCounts.push(tempVertexData.indices.length);
                }
                else {
                    // Set indices on the fly
                    var indices = [];
                    for (var j = 0; j < tempVertexData.positions.length / 3; j++) {
                        indices.push(j);
                    }
                    tempVertexData.indices = new Int32Array(indices);
                    indexCounts.push(tempVertexData.indices.length);
                }
                vertexData.merge(tempVertexData);
                tempVertexData = undefined;
                // Sub material
                var material = getMaterial(runtime, primitive.material);
                multiMat.subMaterials.push(material);
                // Update vertices start and index start
                verticesStarts.push(verticesStarts.length === 0 ? 0 : verticesStarts[verticesStarts.length - 1] + verticesCounts[verticesCounts.length - 2]);
                indexStarts.push(indexStarts.length === 0 ? 0 : indexStarts[indexStarts.length - 1] + indexCounts[indexCounts.length - 2]);
            }
            // Apply geometry
            geometry.setAllVerticesData(vertexData, false);
            babylonMesh.computeWorldMatrix(true);
            // Apply submeshes
            babylonMesh.subMeshes = [];
            for (var index = 0; index < mesh.primitives.length; index++) {
                if (mesh.primitives[index].mode !== GLTF2.EMeshPrimitiveMode.TRIANGLES) {
                    //continue;
                }
                var subMesh = new BABYLON.SubMesh(index, verticesStarts[index], verticesCounts[index], indexStarts[index], indexCounts[index], babylonMesh, babylonMesh, true);
            }
            // Finish
            return babylonMesh;
        };
        /**
        * Configures node transformation
        */
        var configureNode = function (babylonNode, node) {
            var position = BABYLON.Vector3.Zero();
            var rotation = BABYLON.Quaternion.Identity();
            var scaling = new BABYLON.Vector3(1, 1, 1);
            if (node.matrix) {
                var mat = BABYLON.Matrix.FromArray(node.matrix);
                mat.decompose(scaling, rotation, position);
            }
            else {
                if (node.translation) {
                    position = BABYLON.Vector3.FromArray(node.translation);
                }
                if (node.rotation) {
                    rotation = BABYLON.Quaternion.FromArray(node.rotation);
                }
                if (node.scale) {
                    scaling = BABYLON.Vector3.FromArray(node.scale);
                }
            }
            babylonNode.position = position;
            babylonNode.rotationQuaternion = rotation;
            if (babylonNode instanceof BABYLON.Mesh) {
                var mesh = babylonNode;
                mesh.scaling = scaling;
            }
        };
        /**
        * Imports a node
        */
        var importNode = function (runtime, node) {
            var babylonNode = null;
            if (runtime.importOnlyMeshes && (node.skin !== undefined || node.mesh !== undefined)) {
                if (runtime.importMeshesNames.length > 0 && runtime.importMeshesNames.indexOf(node.name) === -1) {
                    return null;
                }
            }
            // Meshes
            if (node.skin !== undefined) {
                if (node.mesh !== undefined) {
                    var skin = runtime.gltf.skins[node.skin];
                    var newMesh = importMesh(runtime, node, runtime.gltf.meshes[node.mesh]);
                    var newSkeleton = importSkeleton(runtime, node, skin);
                    if (newSkeleton) {
                        newMesh.skeleton = newSkeleton;
                        skin.babylonSkeleton = newSkeleton;
                    }
                    babylonNode = newMesh;
                }
            }
            else if (node.mesh !== undefined) {
                babylonNode = importMesh(runtime, node, runtime.gltf.meshes[node.mesh]);
            }
            else if (node.camera !== undefined && !node.babylonNode && !runtime.importOnlyMeshes) {
                var camera = runtime.gltf.cameras[node.camera];
                if (camera !== undefined) {
                    if (camera.type === "orthographic") {
                        var orthographicCamera = camera.orthographic;
                        var orthoCamera = new BABYLON.FreeCamera(node.name || "camera" + node.camera, BABYLON.Vector3.Zero(), runtime.babylonScene);
                        orthoCamera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
                        orthoCamera.attachControl(runtime.babylonScene.getEngine().getRenderingCanvas());
                        babylonNode = orthoCamera;
                    }
                    else if (camera.type === "perspective") {
                        var perspectiveCamera = camera.perspective;
                        var persCamera = new BABYLON.FreeCamera(node.name || "camera" + node.camera, BABYLON.Vector3.Zero(), runtime.babylonScene);
                        persCamera.attachControl(runtime.babylonScene.getEngine().getRenderingCanvas());
                        if (!perspectiveCamera.aspectRatio) {
                            perspectiveCamera.aspectRatio = runtime.babylonScene.getEngine().getRenderWidth() / runtime.babylonScene.getEngine().getRenderHeight();
                        }
                        if (perspectiveCamera.znear && perspectiveCamera.zfar) {
                            persCamera.maxZ = perspectiveCamera.zfar;
                            persCamera.minZ = perspectiveCamera.znear;
                        }
                        babylonNode = persCamera;
                    }
                }
            }
            // Empty node
            if (node.babylonNode) {
                return node.babylonNode;
            }
            else if (babylonNode === null) {
                var dummy = new BABYLON.Mesh(node.name || "mesh" + node.mesh, runtime.babylonScene);
                node.babylonNode = dummy;
                babylonNode = dummy;
            }
            if (babylonNode !== null) {
                configureNode(babylonNode, node);
                babylonNode.updateCache(true);
                node.babylonNode = babylonNode;
            }
            return babylonNode;
        };
        /**
        * Traverses nodes and creates them
        */
        var traverseNodes = function (runtime, index, parent, meshIncluded) {
            var node = runtime.gltf.nodes[index];
            var newNode = null;
            if (runtime.importOnlyMeshes && !meshIncluded) {
                if (runtime.importMeshesNames.indexOf(node.name) !== -1 || runtime.importMeshesNames.length === 0) {
                    meshIncluded = true;
                }
                else {
                    meshIncluded = false;
                }
            }
            else {
                meshIncluded = true;
            }
            if (meshIncluded) {
                newNode = importNode(runtime, node);
                if (newNode !== null) {
                    newNode.id = createStringId(index);
                    newNode.parent = parent;
                }
            }
            if (node.children) {
                for (var i = 0; i < node.children.length; i++) {
                    traverseNodes(runtime, node.children[i], newNode, meshIncluded);
                }
            }
        };
        var importScene = function (runtime) {
            var scene = runtime.gltf.scene || 0;
            var scenes = runtime.gltf.scenes;
            if (scenes) {
                var nodes = scenes[scene].nodes;
                for (var i = 0; i < nodes.length; i++) {
                    traverseNodes(runtime, nodes[i], null);
                }
            }
            else {
                for (var i = 0; i < runtime.gltf.nodes.length; i++) {
                    traverseNodes(runtime, i, null);
                }
            }
        };
        /**
        * do stuff after buffers are loaded (e.g. hook up materials, load animations, etc.)
        */
        var postLoad = function (runtime) {
            importScene(runtime);
            // Set animations
            loadAnimations(runtime);
            for (var i = 0; i < runtime.babylonScene.skeletons.length; i++) {
                var skeleton = runtime.babylonScene.skeletons[i];
                runtime.babylonScene.beginAnimation(skeleton, 0, Number.MAX_VALUE, true, 1.0);
            }
        };
        var importMaterials = function (runtime) {
            if (runtime.gltf.materials) {
                for (var i = 0; i < runtime.gltf.materials.length; i++) {
                    GLTF2.GLTFLoaderExtension.LoadMaterial(runtime, i);
                }
            }
        };
        var BinaryReader = (function () {
            function BinaryReader(arrayBuffer) {
                this._arrayBuffer = arrayBuffer;
                this._dataView = new DataView(arrayBuffer);
                this._byteOffset = 0;
            }
            BinaryReader.prototype.getPosition = function () {
                return this._byteOffset;
            };
            BinaryReader.prototype.getLength = function () {
                return this._arrayBuffer.byteLength;
            };
            BinaryReader.prototype.readUint32 = function () {
                var value = this._dataView.getUint32(this._byteOffset, true);
                this._byteOffset += 4;
                return value;
            };
            BinaryReader.prototype.readUint8Array = function (length) {
                var value = new Uint8Array(this._arrayBuffer, this._byteOffset, length);
                this._byteOffset += length;
                return value;
            };
            BinaryReader.prototype.skipBytes = function (length) {
                this._byteOffset += length;
            };
            return BinaryReader;
        }());
        /**
        * glTF File Loader Plugin
        */
        var GLTFLoader = (function () {
            function GLTFLoader() {
            }
            GLTFLoader.RegisterExtension = function (extension) {
                if (GLTFLoader.Extensions[extension.name]) {
                    BABYLON.Tools.Error("Tool with the same name \"" + extension.name + "\" already exists");
                    return;
                }
                GLTFLoader.Extensions[extension.name] = extension;
            };
            GLTFLoader.LoadMaterial = function (runtime, index) {
                var material = runtime.gltf.materials[index];
                if (!material)
                    return null;
                material.babylonMaterial = new BABYLON.PBRMaterial(material.name || "mat" + index, runtime.babylonScene);
                material.babylonMaterial.sideOrientation = BABYLON.Material.CounterClockWiseSideOrientation;
                material.babylonMaterial.useScalarInLinearSpace = true;
                return material;
            };
            GLTFLoader.LoadCommonMaterialProperties = function (runtime, material) {
                if (material.normalTexture) {
                    GLTFLoader.LoadTextureAsync(runtime, material.normalTexture, function (babylonTexture) {
                        material.babylonMaterial.bumpTexture = babylonTexture;
                        if (material.normalTexture.scale !== undefined) {
                            material.babylonMaterial.bumpTexture.level = material.normalTexture.scale;
                        }
                    }, function () { return BABYLON.Tools.Warn("Failed to load normal texture"); });
                }
                if (material.occlusionTexture) {
                    GLTFLoader.LoadTextureAsync(runtime, material.occlusionTexture, function (babylonTexture) {
                        material.babylonMaterial.ambientTexture = babylonTexture;
                        material.babylonMaterial.useAmbientInGrayScale = true;
                        if (material.occlusionTexture.strength !== undefined) {
                            material.babylonMaterial.ambientTextureStrength = material.occlusionTexture.strength;
                        }
                    }, function () { return BABYLON.Tools.Warn("Failed to load occlusion texture"); });
                }
                material.babylonMaterial.useEmissiveAsIllumination = (material.emissiveFactor || material.emissiveTexture) ? true : false;
                material.babylonMaterial.emissiveColor = material.emissiveFactor ? BABYLON.Color3.FromArray(material.emissiveFactor) : new BABYLON.Color3(0, 0, 0);
                if (material.emissiveTexture) {
                    GLTFLoader.LoadTextureAsync(runtime, material.emissiveTexture, function (babylonTexture) {
                        material.babylonMaterial.emissiveTexture = babylonTexture;
                    }, function () { return BABYLON.Tools.Warn("Failed to load emissive texture"); });
                }
                if (material.doubleSided) {
                    material.babylonMaterial.backFaceCulling = false;
                    material.babylonMaterial.twoSidedLighting = true;
                }
            };
            GLTFLoader.LoadAlphaProperties = function (runtime, material) {
                var alphaMode = material.alphaMode || "OPAQUE";
                switch (alphaMode) {
                    case "OPAQUE":
                        // default is opaque
                        break;
                    case "MASK":
                        material.babylonMaterial.albedoTexture.hasAlpha = true;
                        material.babylonMaterial.useAlphaFromAlbedoTexture = false;
                        material.babylonMaterial.alphaMode = BABYLON.Engine.ALPHA_DISABLE;
                        break;
                    case "BLEND":
                        material.babylonMaterial.albedoTexture.hasAlpha = true;
                        material.babylonMaterial.useAlphaFromAlbedoTexture = true;
                        material.babylonMaterial.alphaMode = BABYLON.Engine.ALPHA_COMBINE;
                        break;
                    default:
                        BABYLON.Tools.Error("Invalid alpha mode '" + material.alphaMode + "'");
                }
            };
            GLTFLoader.LoadTextureAsync = function (runtime, textureInfo, onSuccess, onError) {
                var texture = runtime.gltf.textures[textureInfo.index];
                if (!texture || texture.source === undefined) {
                    onError();
                    return;
                }
                if (texture.babylonTexture) {
                    onSuccess(texture.babylonTexture);
                    return;
                }
                var source = runtime.gltf.images[texture.source];
                if (source.uri === undefined) {
                    var bufferView = runtime.gltf.bufferViews[source.bufferView];
                    var buffer = GLTF2.GLTFUtils.GetBufferFromBufferView(runtime, bufferView, 0, bufferView.byteLength, GLTF2.EComponentType.UNSIGNED_BYTE);
                    GLTFLoader.CreateTextureAsync(runtime, textureInfo, buffer, source.mimeType, onSuccess, onError);
                }
                else if (GLTF2.GLTFUtils.IsBase64(source.uri)) {
                    GLTFLoader.CreateTextureAsync(runtime, textureInfo, new Uint8Array(GLTF2.GLTFUtils.DecodeBase64(source.uri)), source.mimeType, onSuccess, onError);
                }
                else {
                    BABYLON.Tools.LoadFile(runtime.rootUrl + source.uri, function (data) {
                        GLTFLoader.CreateTextureAsync(runtime, textureInfo, new Uint8Array(data), source.mimeType, onSuccess, onError);
                    }, null, null, true, onError);
                }
            };
            GLTFLoader.CreateTextureAsync = function (runtime, textureInfo, buffer, mimeType, onSuccess, onError) {
                var texture = runtime.gltf.textures[textureInfo.index];
                if (!texture || texture.source === undefined) {
                    onError();
                    return;
                }
                if (texture.babylonTexture) {
                    onSuccess(texture.babylonTexture);
                    return;
                }
                var sampler = texture.sampler ? runtime.gltf.samplers[texture.sampler] : {};
                var createMipMaps = (sampler.minFilter === GLTF2.ETextureMinFilter.NEAREST_MIPMAP_NEAREST) ||
                    (sampler.minFilter === GLTF2.ETextureMinFilter.NEAREST_MIPMAP_LINEAR) ||
                    (sampler.minFilter === GLTF2.ETextureMinFilter.LINEAR_MIPMAP_NEAREST) ||
                    (sampler.minFilter === GLTF2.ETextureMinFilter.LINEAR_MIPMAP_LINEAR);
                var samplingMode = BABYLON.Texture.BILINEAR_SAMPLINGMODE;
                var blob = new Blob([buffer], { type: mimeType });
                var blobURL = URL.createObjectURL(blob);
                var revokeBlobURL = function () { return URL.revokeObjectURL(blobURL); };
                texture.babylonTexture = new BABYLON.Texture(blobURL, runtime.babylonScene, !createMipMaps, true, samplingMode, revokeBlobURL, revokeBlobURL);
                texture.babylonTexture.coordinatesIndex = textureInfo.texCoord === undefined ? 0 : textureInfo.texCoord;
                texture.babylonTexture.wrapU = GLTF2.GLTFUtils.GetWrapMode(sampler.wrapS);
                texture.babylonTexture.wrapV = GLTF2.GLTFUtils.GetWrapMode(sampler.wrapT);
                texture.babylonTexture.name = texture.name;
                onSuccess(texture.babylonTexture);
            };
            /**
            * Import meshes
            */
            GLTFLoader.prototype.importMeshAsync = function (meshesNames, scene, data, rootUrl, onSuccess, onError) {
                scene.useRightHandedSystem = true;
                var runtime = this._createRuntime(scene, data, rootUrl, true);
                if (!runtime) {
                    if (onError)
                        onError();
                    return;
                }
                if (meshesNames === "") {
                    runtime.importMeshesNames = [];
                }
                else if (typeof meshesNames === "string") {
                    runtime.importMeshesNames = [meshesNames];
                }
                else if (meshesNames && !(meshesNames instanceof Array)) {
                    runtime.importMeshesNames = [meshesNames];
                }
                else {
                    runtime.importMeshesNames = [];
                    BABYLON.Tools.Warn("Argument meshesNames must be of type string or string[]");
                }
                // Load scene
                importScene(runtime);
                var meshes = [];
                var skeletons = [];
                // Fill arrays of meshes and skeletons
                for (var i = 0; i < runtime.gltf.nodes.length; i++) {
                    var node = runtime.gltf.nodes[i];
                    if (node.babylonNode instanceof BABYLON.AbstractMesh) {
                        meshes.push(node.babylonNode);
                    }
                }
                for (var i = 0; i < runtime.gltf.skins.length; i++) {
                    var skin = runtime.gltf.skins[i];
                    if (skin.babylonSkeleton instanceof BABYLON.Skeleton) {
                        skeletons.push(skin.babylonSkeleton);
                    }
                }
                // Load buffers, materials, etc.
                this._loadBuffersAsync(runtime, function () {
                    importMaterials(runtime);
                    postLoad(runtime);
                    if (!BABYLON.GLTFFileLoader.IncrementalLoading && onSuccess) {
                        onSuccess(meshes, null, skeletons);
                    }
                }, onError);
                if (BABYLON.GLTFFileLoader.IncrementalLoading && onSuccess) {
                    onSuccess(meshes, null, skeletons);
                }
                return true;
            };
            /**
            * Load scene
            */
            GLTFLoader.prototype.loadAsync = function (scene, data, rootUrl, onSuccess, onError) {
                scene.useRightHandedSystem = true;
                var runtime = this._createRuntime(scene, data, rootUrl, false);
                if (!runtime) {
                    if (onError)
                        onError();
                    return false;
                }
                importScene(runtime);
                this._loadBuffersAsync(runtime, function () {
                    importMaterials(runtime);
                    postLoad(runtime);
                    if (!BABYLON.GLTFFileLoader.IncrementalLoading) {
                        onSuccess();
                    }
                }, onError);
                if (BABYLON.GLTFFileLoader.IncrementalLoading) {
                    onSuccess();
                }
                return true;
            };
            GLTFLoader.prototype._loadBuffersAsync = function (runtime, onSuccess, onError) {
                var _this = this;
                if (runtime.gltf.buffers.length == 0) {
                    onSuccess();
                    return;
                }
                var loadedCount = 0;
                runtime.gltf.buffers.forEach(function (buffer, index) {
                    _this._loadBufferAsync(runtime, index, function () {
                        if (++loadedCount >= runtime.gltf.buffers.length) {
                            onSuccess();
                        }
                    }, onError);
                });
            };
            GLTFLoader.prototype._loadBufferAsync = function (runtime, index, onSuccess, onError) {
                var buffer = runtime.gltf.buffers[index];
                if (buffer.uri === undefined) {
                    // buffer.loadedBufferView should already be set
                    onSuccess();
                }
                else if (GLTF2.GLTFUtils.IsBase64(buffer.uri)) {
                    var data = GLTF2.GLTFUtils.DecodeBase64(buffer.uri);
                    setTimeout(function () {
                        buffer.loadedBufferView = new Uint8Array(data);
                        onSuccess();
                    });
                }
                else {
                    BABYLON.Tools.LoadFile(runtime.rootUrl + buffer.uri, function (data) {
                        buffer.loadedBufferView = new Uint8Array(data);
                        onSuccess();
                    }, null, null, true, onError);
                }
            };
            GLTFLoader.prototype._createRuntime = function (scene, data, rootUrl, importOnlyMeshes) {
                var runtime = {
                    gltf: data.json,
                    babylonScene: scene,
                    rootUrl: rootUrl,
                    importOnlyMeshes: importOnlyMeshes,
                };
                var binaryBuffer;
                var buffers = runtime.gltf.buffers;
                if (buffers.length > 0 && buffers[0].uri === undefined) {
                    binaryBuffer = buffers[0];
                }
                if (data.bin) {
                    if (!binaryBuffer) {
                        BABYLON.Tools.Error("Unexpected BIN chunk");
                        return null;
                    }
                    if (binaryBuffer.byteLength != data.bin.byteLength) {
                        BABYLON.Tools.Error("Binary buffer length from JSON does not match chunk length");
                        return null;
                    }
                    binaryBuffer.loadedBufferView = data.bin;
                }
                GLTF2.GLTFLoaderExtension.PostCreateRuntime(runtime);
                return runtime;
            };
            return GLTFLoader;
        }());
        GLTFLoader.Extensions = {};
        GLTFLoader.LoadMetallicRoughnessMaterialProperties = function (runtime, material) {
            var properties = material.pbrMetallicRoughness;
            if (!properties)
                return;
            material.babylonMaterial.albedoColor = properties.baseColorFactor ? BABYLON.Color3.FromArray(properties.baseColorFactor) : new BABYLON.Color3(1, 1, 1);
            material.babylonMaterial.metallic = properties.metallicFactor === undefined ? 1 : properties.metallicFactor;
            material.babylonMaterial.roughness = properties.roughnessFactor === undefined ? 1 : properties.roughnessFactor;
            if (properties.baseColorTexture) {
                GLTFLoader.LoadTextureAsync(runtime, properties.baseColorTexture, function (texture) {
                    material.babylonMaterial.albedoTexture = texture;
                    GLTFLoader.LoadAlphaProperties(runtime, material);
                }, function () {
                    BABYLON.Tools.Warn("Failed to load base color texture");
                });
            }
            if (properties.metallicRoughnessTexture) {
                GLTFLoader.LoadTextureAsync(runtime, properties.metallicRoughnessTexture, function (texture) {
                    material.babylonMaterial.metallicTexture = texture;
                    material.babylonMaterial.useMetallnessFromMetallicTextureBlue = true;
                    material.babylonMaterial.useRoughnessFromMetallicTextureGreen = true;
                    material.babylonMaterial.useRoughnessFromMetallicTextureAlpha = false;
                }, function () {
                    BABYLON.Tools.Warn("Failed to load metallic roughness texture");
                });
            }
        };
        GLTF2.GLTFLoader = GLTFLoader;
        BABYLON.GLTFFileLoader.GLTFLoaderV2 = new GLTFLoader();
    })(GLTF2 = BABYLON.GLTF2 || (BABYLON.GLTF2 = {}));
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=babylon.glTFLoader.js.map

/// <reference path="../../../../dist/preview release/babylon.d.ts"/>
var BABYLON;
(function (BABYLON) {
    var GLTF2;
    (function (GLTF2) {
        /**
        * Utils functions for GLTF
        */
        var GLTFUtils = (function () {
            function GLTFUtils() {
            }
            /**
            * If the uri is a base64 string
            * @param uri: the uri to test
            */
            GLTFUtils.IsBase64 = function (uri) {
                return uri.length < 5 ? false : uri.substr(0, 5) === "data:";
            };
            /**
            * Decode the base64 uri
            * @param uri: the uri to decode
            */
            GLTFUtils.DecodeBase64 = function (uri) {
                var decodedString = atob(uri.split(",")[1]);
                var bufferLength = decodedString.length;
                var bufferView = new Uint8Array(new ArrayBuffer(bufferLength));
                for (var i = 0; i < bufferLength; i++) {
                    bufferView[i] = decodedString.charCodeAt(i);
                }
                return bufferView.buffer;
            };
            /**
            * Returns the wrap mode of the texture
            * @param mode: the mode value
            */
            GLTFUtils.GetWrapMode = function (mode) {
                switch (mode) {
                    case GLTF2.ETextureWrapMode.CLAMP_TO_EDGE: return BABYLON.Texture.CLAMP_ADDRESSMODE;
                    case GLTF2.ETextureWrapMode.MIRRORED_REPEAT: return BABYLON.Texture.MIRROR_ADDRESSMODE;
                    case GLTF2.ETextureWrapMode.REPEAT: return BABYLON.Texture.WRAP_ADDRESSMODE;
                    default: return BABYLON.Texture.WRAP_ADDRESSMODE;
                }
            };
            /**
             * Returns the byte stride giving an accessor
             * @param accessor: the GLTF accessor objet
             */
            GLTFUtils.GetByteStrideFromType = function (accessor) {
                // Needs this function since "byteStride" isn't requiered in glTF format
                var type = accessor.type;
                switch (type) {
                    case "VEC2": return 2;
                    case "VEC3": return 3;
                    case "VEC4": return 4;
                    case "MAT2": return 4;
                    case "MAT3": return 9;
                    case "MAT4": return 16;
                    default: return 1;
                }
            };
            /**
             * Returns the texture filter mode giving a mode value
             * @param mode: the filter mode value
             */
            GLTFUtils.GetTextureFilterMode = function (mode) {
                switch (mode) {
                    case GLTF2.ETextureMinFilter.LINEAR:
                    case GLTF2.ETextureMinFilter.LINEAR_MIPMAP_NEAREST:
                    case GLTF2.ETextureMinFilter.LINEAR_MIPMAP_LINEAR: return BABYLON.Texture.TRILINEAR_SAMPLINGMODE;
                    case GLTF2.ETextureMinFilter.NEAREST:
                    case GLTF2.ETextureMinFilter.NEAREST_MIPMAP_NEAREST: return BABYLON.Texture.NEAREST_SAMPLINGMODE;
                    default: return BABYLON.Texture.BILINEAR_SAMPLINGMODE;
                }
            };
            GLTFUtils.GetBufferFromBufferView = function (runtime, bufferView, byteOffset, byteLength, componentType) {
                var byteOffset = bufferView.byteOffset + byteOffset;
                var loadedBufferView = runtime.gltf.buffers[bufferView.buffer].loadedBufferView;
                if (byteOffset + byteLength > loadedBufferView.byteLength) {
                    throw new Error("Buffer access is out of range");
                }
                var buffer = loadedBufferView.buffer;
                byteOffset += loadedBufferView.byteOffset;
                switch (componentType) {
                    case GLTF2.EComponentType.BYTE: return new Int8Array(buffer, byteOffset, byteLength);
                    case GLTF2.EComponentType.UNSIGNED_BYTE: return new Uint8Array(buffer, byteOffset, byteLength);
                    case GLTF2.EComponentType.SHORT: return new Int16Array(buffer, byteOffset, byteLength);
                    case GLTF2.EComponentType.UNSIGNED_SHORT: return new Uint16Array(buffer, byteOffset, byteLength);
                    default: return new Float32Array(buffer, byteOffset, byteLength);
                }
            };
            /**
             * Returns a buffer from its accessor
             * @param runtime: the GLTF runtime
             * @param accessor: the GLTF accessor
             */
            GLTFUtils.GetBufferFromAccessor = function (runtime, accessor) {
                var bufferView = runtime.gltf.bufferViews[accessor.bufferView];
                var byteLength = accessor.count * GLTFUtils.GetByteStrideFromType(accessor);
                return GLTFUtils.GetBufferFromBufferView(runtime, bufferView, accessor.byteOffset, byteLength, accessor.componentType);
            };
            /**
             * Decodes a buffer view into a string
             * @param view: the buffer view
             */
            GLTFUtils.DecodeBufferToText = function (view) {
                var result = "";
                var length = view.byteLength;
                for (var i = 0; i < length; ++i) {
                    result += String.fromCharCode(view[i]);
                }
                return result;
            };
            /**
             * Returns the default material of gltf.
             * @param scene: the Babylon.js scene
             */
            GLTFUtils.GetDefaultMaterial = function (runtime) {
                if (!runtime.defaultMaterial) {
                    var material = new BABYLON.PBRMaterial("gltf_default", runtime.babylonScene);
                    material.sideOrientation = BABYLON.Material.CounterClockWiseSideOrientation;
                    material.metallic = 1;
                    material.roughness = 1;
                    runtime.defaultMaterial = material;
                }
                return runtime.defaultMaterial;
            };
            return GLTFUtils;
        }());
        GLTF2.GLTFUtils = GLTFUtils;
    })(GLTF2 = BABYLON.GLTF2 || (BABYLON.GLTF2 = {}));
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=babylon.glTFLoaderUtils.js.map

/// <reference path="../../../../dist/preview release/babylon.d.ts"/>
var BABYLON;
(function (BABYLON) {
    var GLTF2;
    (function (GLTF2) {
        var GLTFLoaderExtension = (function () {
            function GLTFLoaderExtension(name) {
                this._name = name;
            }
            Object.defineProperty(GLTFLoaderExtension.prototype, "name", {
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            GLTFLoaderExtension.prototype.postCreateRuntime = function (runtime) { };
            // Return true to stop other extensions from loading materials.
            GLTFLoaderExtension.prototype.loadMaterial = function (runtime, index) { return false; };
            // ---------
            // Utilities
            // ---------
            GLTFLoaderExtension.PostCreateRuntime = function (runtime) {
                for (var extensionName in GLTF2.GLTFLoader.Extensions) {
                    var extension = GLTF2.GLTFLoader.Extensions[extensionName];
                    extension.postCreateRuntime(runtime);
                }
            };
            GLTFLoaderExtension.LoadMaterial = function (runtime, index) {
                for (var extensionName in GLTF2.GLTFLoader.Extensions) {
                    var extension = GLTF2.GLTFLoader.Extensions[extensionName];
                    if (extension.loadMaterial(runtime, index)) {
                        return;
                    }
                }
                var material = GLTF2.GLTFLoader.LoadMaterial(runtime, index);
                if (material) {
                    GLTF2.GLTFLoader.LoadMetallicRoughnessMaterialProperties(runtime, material);
                    GLTF2.GLTFLoader.LoadCommonMaterialProperties(runtime, material);
                }
            };
            return GLTFLoaderExtension;
        }());
        GLTF2.GLTFLoaderExtension = GLTFLoaderExtension;
    })(GLTF2 = BABYLON.GLTF2 || (BABYLON.GLTF2 = {}));
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=babylon.glTFLoaderExtension.js.map

/// <reference path="../../../../dist/preview release/babylon.d.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BABYLON;
(function (BABYLON) {
    var GLTF2;
    (function (GLTF2) {
        var GLTFMaterialsPbrSpecularGlossinessExtension = (function (_super) {
            __extends(GLTFMaterialsPbrSpecularGlossinessExtension, _super);
            function GLTFMaterialsPbrSpecularGlossinessExtension() {
                return _super.call(this, "KHR_materials_pbrSpecularGlossiness") || this;
            }
            GLTFMaterialsPbrSpecularGlossinessExtension.prototype.loadMaterial = function (runtime, index) {
                var material = GLTF2.GLTFLoader.LoadMaterial(runtime, index);
                if (!material || !material.extensions)
                    return false;
                var properties = material.extensions[this.name];
                if (!properties)
                    return false;
                material.babylonMaterial.albedoColor = properties.diffuseFactor ? BABYLON.Color3.FromArray(properties.diffuseFactor) : new BABYLON.Color3(1, 1, 1);
                material.babylonMaterial.reflectivityColor = properties.specularFactor ? BABYLON.Color3.FromArray(properties.specularFactor) : new BABYLON.Color3(1, 1, 1);
                material.babylonMaterial.microSurface = properties.glossinessFactor === undefined ? 1 : properties.glossinessFactor;
                if (properties.diffuseTexture) {
                    GLTF2.GLTFLoader.LoadTextureAsync(runtime, properties.diffuseTexture, function (texture) {
                        material.babylonMaterial.albedoTexture = texture;
                        GLTF2.GLTFLoader.LoadAlphaProperties(runtime, material);
                    }, function () {
                        BABYLON.Tools.Warn("Failed to load diffuse texture");
                    });
                }
                if (properties.specularGlossinessTexture) {
                    GLTF2.GLTFLoader.LoadTextureAsync(runtime, properties.specularGlossinessTexture, function (texture) {
                        material.babylonMaterial.reflectivityTexture = texture;
                        material.babylonMaterial.useMicroSurfaceFromReflectivityMapAlpha = true;
                    }, function () {
                        BABYLON.Tools.Warn("Failed to load metallic roughness texture");
                    });
                }
                GLTF2.GLTFLoader.LoadCommonMaterialProperties(runtime, material);
                return true;
            };
            return GLTFMaterialsPbrSpecularGlossinessExtension;
        }(GLTF2.GLTFLoaderExtension));
        GLTF2.GLTFMaterialsPbrSpecularGlossinessExtension = GLTFMaterialsPbrSpecularGlossinessExtension;
        GLTF2.GLTFLoader.RegisterExtension(new GLTFMaterialsPbrSpecularGlossinessExtension());
    })(GLTF2 = BABYLON.GLTF2 || (BABYLON.GLTF2 = {}));
})(BABYLON || (BABYLON = {}));

//# sourceMappingURL=babylon.glTFMaterialsPbrSpecularGlossinessExtension.js.map
