package com.bibisco.dao.client;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bibisco.dao.model.SceneRevisionStrandsExample;
import com.bibisco.dao.model.SceneRevisionStrandsKey;

public interface SceneRevisionStrandsMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table PUBLIC.SCENE_REVISION_STRANDS
     *
     * @mbggenerated Wed Jul 24 20:45:12 CEST 2013
     */
    int countByExample(SceneRevisionStrandsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table PUBLIC.SCENE_REVISION_STRANDS
     *
     * @mbggenerated Wed Jul 24 20:45:12 CEST 2013
     */
    int deleteByExample(SceneRevisionStrandsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table PUBLIC.SCENE_REVISION_STRANDS
     *
     * @mbggenerated Wed Jul 24 20:45:12 CEST 2013
     */
    int deleteByPrimaryKey(SceneRevisionStrandsKey key);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table PUBLIC.SCENE_REVISION_STRANDS
     *
     * @mbggenerated Wed Jul 24 20:45:12 CEST 2013
     */
    int insert(SceneRevisionStrandsKey record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table PUBLIC.SCENE_REVISION_STRANDS
     *
     * @mbggenerated Wed Jul 24 20:45:12 CEST 2013
     */
    int insertSelective(SceneRevisionStrandsKey record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table PUBLIC.SCENE_REVISION_STRANDS
     *
     * @mbggenerated Wed Jul 24 20:45:12 CEST 2013
     */
    List<SceneRevisionStrandsKey> selectByExample(SceneRevisionStrandsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table PUBLIC.SCENE_REVISION_STRANDS
     *
     * @mbggenerated Wed Jul 24 20:45:12 CEST 2013
     */
    int updateByExampleSelective(@Param("record") SceneRevisionStrandsKey record, @Param("example") SceneRevisionStrandsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table PUBLIC.SCENE_REVISION_STRANDS
     *
     * @mbggenerated Wed Jul 24 20:45:12 CEST 2013
     */
    int updateByExample(@Param("record") SceneRevisionStrandsKey record, @Param("example") SceneRevisionStrandsExample example);
}